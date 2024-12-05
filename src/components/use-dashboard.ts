import { useEffect, useState } from "preact/hooks";
import { CT_REPOSITORIES_NAMES, OPEN_MODAL_EVENT } from "../constants";

export type PullRequest = {
  id: string;
  title: string;
  url: string;
  repositoryName: string;
  description: string;
  userAvatarUrl?: string | null;
  userName?: string | null;
};

const parsePRs = (
  repoHtmlResponse: string,
  repositoryName: string
): PullRequest[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(repoHtmlResponse, "text/html");
  const prsBlocks = doc.querySelectorAll('div[id*="issue_"]');
  return Array.from(prsBlocks).map((prBlock) => {
    const id = prBlock.id.split("_")[1];
    const title = prBlock.querySelector("a.markdown-title")!
      .textContent as string;
    const url = ("https://github.com" +
      prBlock
        .querySelector("a.markdown-title")!
        .getAttribute("href")) as string;
    const description = prBlock.querySelector(".opened-by")!
      .textContent as string;
    const userAvatarUrl = prBlock
      .querySelector("img.avatar-user")
      ?.getAttribute("src");
    const userName = prBlock
      .querySelector("img.avatar-user")
      ?.getAttribute("alt");
    return {
      id,
      title,
      url,
      description,
      userAvatarUrl,
      userName,
      repositoryName,
    };
  });
};

const fetchRepoPRs = async (repoName: string): Promise<PullRequest[]> => {
  if (window.location.hostname === "localhost") {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const fixture = await import(
          "../fixtures/repository-prs-html-response"
        );
        resolve(parsePRs(fixture.prsListHtml, repoName));
      }, 1000);
    });
  }
  const response = await fetch(
    `https://github.com/commercetools/${repoName}/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen`
  );
  const html = await response.text();
  return parsePRs(html, repoName);
};

const fetchPRs = async (): Promise<PullRequest[]> => {
  const responses = await Promise.all(CT_REPOSITORIES_NAMES.map(fetchRepoPRs));
  return responses.flat();
};

export function useDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    const loadPRs = async () => {
      setIsLoading(true);
      try {
        const prs = await fetchPRs();
        setPullRequests(prs);
      } catch (error) {
        console.error("Failed to fetch PRs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPRs();
  }, []);

  useEffect(() => {
    // @ts-ignore
    window.__fe_chapter_dashboard_modal_loaded = true;
    window.addEventListener("message", (event) => {
      if (event.data === OPEN_MODAL_EVENT) {
        setIsModalOpened(true);
      }
    });
  }, [isModalOpened]);

  return {
    isLoading,
    pullRequests,
    isModalOpened,
    closeModal: () => setIsModalOpened(false),
  };
}
