import { useState } from 'react'
import { GitPullRequest } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { useDashboard } from './use-dashboard';

export function FeChapterDashboardModal() {
  const [selectedRepo, setSelectedRepo] = useState("all");
  const {
    isLoading,
    pullRequests,
    isModalOpened,
    closeModal,
  } = useDashboard();

  const repositories = ["all", ...new Set(pullRequests.map(pr => pr.repositoryName))]

  const filteredPRs = pullRequests.filter(pr =>
    (selectedRepo === "all" || pr.repositoryName === selectedRepo)
  )

  return (
    <Dialog open={isModalOpened} onOpenChange={closeModal}>
      <DialogContent className="max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Frontend Chapter PRs</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-2">
            <Select value={selectedRepo} onValueChange={setSelectedRepo}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select repository" />
              </SelectTrigger>
              <SelectContent>
                {repositories.map((repo) => (
                  <SelectItem key={repo} value={repo}>
                    {repo === "all" ? "All Repositories" : repo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="max-h-[400px] overflow-y-auto">
            {isLoading ? (
              // Loading state
              Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border-b last:border-b-0">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <div className="flex-grow space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
              ))
            ) : (
              // Loaded state
              filteredPRs.map((pr) => (
                <div key={`${pr.repositoryName}_${pr.id}`} className="flex items-center space-x-4 p-4 border-b last:border-b-0">
                  <GitPullRequest className="h-6 w-6 text-green-500" />
                  <div className="flex-grow">
                    <a href={pr.url} target="_blank">
                      <h3 className="text-sm font-medium hover:underline">{pr.title}</h3>
                    </a>
                    <p className="text-sm text-muted-foreground">
                      {pr.description} in {pr.repositoryName}
                    </p>
                  </div>
                  {/* <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800`}>
                    {pr.userName}
                  </span> */}
                  {
                    pr.userAvatarUrl && pr.userName && (
                      <img className="h-6 w-6 rounded" src={pr.userAvatarUrl} alt={pr.userName} />
                    )
                  }
                </div>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
