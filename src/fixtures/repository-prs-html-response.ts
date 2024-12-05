export const prsListHtml = `
<div id="repository-container-header" data-turbo-replace hidden ></div>
<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
  <div class="clearfix new-discussion-timeline js-check-all-container container-xl px-3 px-md-4 px-lg-5 mt-4" data-pjax="" data-turbo-frame="">
<h1 class='sr-only'>Pull requests: commercetools/merchant-center-frontend</h1>
  <include-fragment src="/commercetools/merchant-center-frontend/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>
<div class="d-flex flex-justify-between mb-md-3 flex-column-reverse flex-md-row flex-items-end">
<div class="d-flex flex-justify-start flex-auto my-4 my-md-0 width-full width-md-auto" role="search">
    <details class="details-reset details-overlay subnav-search-context flex-shrink-0" id="filters-select-menu">
      <summary data-view-component="true" class="rounded-right-0 color-border-emphasis Button--secondary Button--medium Button">  <span class="Button-content">
  <span class="Button-label">Filters</span>
</span>
  <span class="Button-visual Button-trailingAction">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
  <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
  </span>
</summary>
      <details-menu class="SelectMenu" role="menu">
        <div class="SelectMenu-modal">
          <div class="SelectMenu-header">
            <h3 class="SelectMenu-title">Filter Issues</h3>
            <button class="SelectMenu-closeButton" type="button" data-toggle-for="filters-select-menu">
              <svg aria-label="Close menu" aria-hidden="false" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
            </button>
          </div>
          <div class="SelectMenu-list" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
              <a
                class="SelectMenu-item"
                role="menuitemradio"
                aria-checked="false"
                href="/commercetools/merchant-center-frontend/issues?q=is%3Aopen"
                data-ga-click="Pull Requests, Search filter, Open issues and pull requests"
              >
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
                Open issues and pull requests
              </a>
              <a
                class="SelectMenu-item"
                role="menuitemradio"
                aria-checked="false"
                href="/commercetools/merchant-center-frontend/issues?q=is%3Aopen+is%3Aissue+author%3A%40me"
                data-ga-click="Pull Requests, Search filter, Your issues"
              >
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
                Your issues
              </a>
            <a
              class="SelectMenu-item"
              role="menuitemradio"
              aria-checked="false"
              href="/commercetools/merchant-center-frontend/issues?q=is%3Aopen+is%3Apr+author%3A%40me"
              data-ga-click="Pull Requests, Search filter, Your pull requests"
            >
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
              Your pull requests
            </a>
            <a
              class="SelectMenu-item"
              role="menuitemradio"
              aria-checked="false"
              href="/commercetools/merchant-center-frontend/issues?q=is%3Aopen+assignee%3A%40me"
              data-ga-click="Pull Requests, Search filter, Everything assigned to you"
            >
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
              Everything assigned to you
            </a>
            <a
              class="SelectMenu-item"
              role="menuitemradio"
              aria-checked="false"
              href="/commercetools/merchant-center-frontend/issues?q=is%3Aopen+mentions%3A%40me"
              data-ga-click="Pull Requests, Search filter, Everything mentioning you"
            >
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
              Everything mentioning you
            </a>
            <a class="SelectMenu-item" role="menuitemradio" href="https://docs.github.com/articles/searching-issues" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external mr-2">
  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
              <strong>View advanced search syntax</strong>
            </a>
          </div>
        </div>
      </details-menu>
    </details>

  </option></form><form class="subnav-search width-full d-flex " data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" role="search" aria-label="Issues" data-turbo="false" action="/commercetools/merchant-center-frontend/pulls" accept-charset="UTF-8" method="get">
    <input type="text" name="q" id="js-issues-search" value="is:pr label:fe-chapter-rotation is:open " class="form-control form-control subnav-search-input input-contrast width-full" placeholder="Search all issues" aria-label="Search all issues" data-hotkey="Control+/,Meta+/" />
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search subnav-search-icon">
  <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
</form>    <div class="ml-2 pl-2 d-none d-md-flex">

<nav class="subnav-links float-left d-flex no-wrap" aria-label="Issue">
<a selected_link="repo_pulls" class="js-selected-navigation-item subnav-item" data-selected-links="repo_labels /commercetools/merchant-center-frontend/labels" href="/commercetools/merchant-center-frontend/labels">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-tag">
  <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
</svg>
  Labels
    <span title="41" data-view-component="true" class="Counter d-none d-md-inline">41</span>
</a>  <a selected_link="repo_pulls" class="js-selected-navigation-item subnav-item" data-selected-links="repo_milestones /commercetools/merchant-center-frontend/milestones" href="/commercetools/merchant-center-frontend/milestones">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-milestone">
  <path d="M7.75 0a.75.75 0 0 1 .75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 0 1 0 2.672l-2.07 1.75a1.75 1.75 0 0 1-1.13.414H8.5v5.25a.75.75 0 0 1-1.5 0V10H2.75A1.75 1.75 0 0 1 1 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 0 1 7.75 0Zm4.384 8.5a.25.25 0 0 0 .161-.06l2.07-1.75a.248.248 0 0 0 0-.38l-2.07-1.75a.25.25 0 0 0-.161-.06H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.384Z"></path>
</svg>
  Milestones
    <span title="0" data-view-component="true" class="Counter d-none d-md-inline">0</span>
</a></nav>

  </div>
</div>
<div class="ml-3 d-flex flex-justify-between width-full width-md-auto" data-pjax>
  <span class="d-md-none">

<nav class="subnav-links float-left d-flex no-wrap" aria-label="Issue">
<a selected_link="repo_pulls" class="js-selected-navigation-item subnav-item" data-selected-links="repo_labels /commercetools/merchant-center-frontend/labels" href="/commercetools/merchant-center-frontend/labels">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-tag">
  <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
</svg>
  Labels
    <span title="41" data-view-component="true" class="Counter d-none d-md-inline">41</span>
</a>  <a selected_link="repo_pulls" class="js-selected-navigation-item subnav-item" data-selected-links="repo_milestones /commercetools/merchant-center-frontend/milestones" href="/commercetools/merchant-center-frontend/milestones">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-milestone">
  <path d="M7.75 0a.75.75 0 0 1 .75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 0 1 0 2.672l-2.07 1.75a1.75 1.75 0 0 1-1.13.414H8.5v5.25a.75.75 0 0 1-1.5 0V10H2.75A1.75 1.75 0 0 1 1 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 0 1 7.75 0Zm4.384 8.5a.25.25 0 0 0 .161-.06l2.07-1.75a.248.248 0 0 0 0-.38l-2.07-1.75a.25.25 0 0 0-.161-.06H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.384Z"></path>
</svg>
  Milestones
    <span title="0" data-view-component="true" class="Counter d-none d-md-inline">0</span>
</a></nav>

  </span>
        <a href="/commercetools/merchant-center-frontend/compare" data-hotkey="c" data-ga-click="Repository, go to compare view, location:pull request list; text:New pull request" tabindex="0" data-view-component="true" class="Button--primary Button--medium Button">  <span class="Button-content">
  <span class="Button-label"><span class="d-none d-md-block">New pull request</span>
          <span class="d-block d-md-none">New</span></span>
</span>
</a>
</div>
</div>

<div class="issues-reset-query-wrapper" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
  <a class="issues-reset-query" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x issues-reset-query-icon">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    Clear current search query, filters, and sorts
</a>  </div>


<div class="d-block d-lg-none no-wrap">

<div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite">
  <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" class="btn-link selected" data-ga-click="Pull Requests, Table state, Open">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
  <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
    5 Open
  </a>

  <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aclosed" class="btn-link " data-ga-click="Pull Requests, Table state, Closed">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    33 Closed
  </a>
</div>

</div>

<div class="Box mt-3 Box--responsive hx_Box--firstRowRounded0">
      <div class="Box-header d-flex flex-justify-between" id="js-issues-toolbar" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
  <div class="mr-3 d-none d-md-block">
    <input type="checkbox" data-check-all aria-label="Select all issues" autocomplete="off">
  </div>

<div class="table-list-filters flex-auto d-flex min-width-0">
  <div class="flex-auto d-none d-lg-block no-wrap">

<div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite">
  <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" class="btn-link selected" data-ga-click="Pull Requests, Table state, Open">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
  <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
    5 Open
  </a>

  <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aclosed" class="btn-link " data-ga-click="Pull Requests, Table state, Closed">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    33 Closed
  </a>
</div>

  </div>

    <div class="table-list-header-toggle no-wrap d-flex flex-auto flex-justify-between flex-sm-justify-start flex-lg-justify-end">

<details class="details-reset details-overlay d-inline-block position-relative px-3" id="author-select-menu">
  <summary class="btn-link" title="Author" data-hotkey="u" aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Author">
    Author
    <span class="dropdown-caret hide-sm"></span>
  </summary>
  <details-menu class="SelectMenu SelectMenu--hasFilter right-lg-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ffilters%2Fauthors_content&amp;pulls_only=true&amp;q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" preload>
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">Filter by author</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="author-select-menu">
          <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </button>
      </header>
      <div class="SelectMenu-filter">
        <input class="SelectMenu-input form-control js-filterable-field" id="author-filter-field" type="text" placeholder="Filter users" aria-label="Filter users" autocomplete="off" spellcheck="false" autofocus>
      </div>
      <div class="SelectMenu-list select-menu-list" data-filter="author">
        <div data-filterable-for="author-filter-field" data-filterable-type="substring">
            <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+author%3ACarlosCortizasCT">
<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
<img class="avatar flex-shrink-0 mr-2 avatar-user" src="https://avatars.githubusercontent.com/u/97907068?s=40&amp;v=4" width="20" height="20" alt="@CarlosCortizasCT" />
<strong class="mr-2">CarlosCortizasCT</strong>
<span class="color-fg-muted css-truncate css-truncate-overflow">Carlos Cortizas</span>
</a>

          <include-fragment class="SelectMenu-loading">
            <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
          </include-fragment>
        </div>
        </option></form><form class="select-menu-new-item-form js-new-item-form" data-turbo="false" action="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" accept-charset="UTF-8" method="get">
          <input type="hidden" name="q" value="is:pr label:fe-chapter-rotation is:open">
          <button class="SelectMenu-item d-block js-new-item-value" type="submit" name="author" role="menuitem">
            <div class="text-bold f5">author:<span class="js-new-item-name"></span></div>
            <div class="color-fg-muted">Filter by this user</div>
          </button>
</form>        </div>
    </div>
  </details-menu>
</details>


<details class="details-reset details-overlay d-inline-block position-relative px-3" id="label-select-menu">
<summary class="btn-link" title="Label" data-hotkey="l" aria-haspopup="true"  data-ga-click="Pull Requests, Table filter, Label">
  Label
  <span class="dropdown-caret hide-sm"></span>
</summary>
<details-menu class="SelectMenu SelectMenu--hasFilter right-lg-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ffilters%2Flabels_content&amp;pulls_only=true&amp;q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" preload>
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Filter by label</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="label-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <div class="SelectMenu-filter">
      <input type="text" id="label-filter-field" class="SelectMenu-input form-control js-filterable-field" placeholder="Filter labels" aria-label="Filter labels" autocomplete="off" autofocus>
    </div>
    <include-fragment class="SelectMenu-loading">
      <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
    </include-fragment>
    <footer class="SelectMenu-footer">
      <div class="text-left">
        <span>Use <kbd class="js-modifier-key">alt</kbd> + <kbd>click/return</kbd> to exclude labels</span>
      </div>
      <div class="text-left mt-1">
        <span>or <kbd>⇧</kbd> + <kbd>click/return</kbd> for logical OR</span>
      </div>
    </footer>
  </div>
</details-menu>
</details>

      <span class="d-none d-md-inline">

<details class="details-reset details-overlay d-inline-block position-relative px-3" id="project-select-menu">
  <summary data-hotkey="p" aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Projects" data-view-component="true" class="btn-link">    Projects
  <span class="dropdown-caret hide-sm"></span>
</summary>  <details-menu class="SelectMenu SelectMenu--hasFilter right-lg-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ffilters%2Fprojects_content&amp;pulls_only=true&amp;q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" preload>
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Filter by project</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="project-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <include-fragment class="SelectMenu-loading">
      <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
    </include-fragment>
   </div>
</details-menu>
</details>


<details class="details-reset details-overlay d-inline-block position-relative px-3" id="milestones-select-menu">
  <summary data-hotkey="m" aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Milestones" data-view-component="true" class="btn-link">    Milestones
  <span class="dropdown-caret hide-sm"></span>
</summary>  <details-menu class="SelectMenu SelectMenu--hasFilter right-lg-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ffilters%2Fmilestones_content&amp;pulls_only=true&amp;q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" preload>
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Filter by milestone</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="milestones-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <div class="SelectMenu-filter">
      <input class="SelectMenu-input form-control js-filterable-field" id="milestones-filter-field" type="text" placeholder="Filter milestones" aria-label="Filter milestones" autocomplete="off" autofocus>
    </div>
    <include-fragment class="SelectMenu-loading">
      <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
    </include-fragment>
  </div>
</details-menu>
</details>

          <details class="details-reset details-overlay d-inline-block position-relative px-3" id="reviews-select-menu">
  <summary aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Reviews" data-view-component="true" class="btn-link">    Reviews
  <span class="dropdown-caret hide-sm"></span>
</summary>  <details-menu class="SelectMenu SelectMenu--hasFilter right-md-0" >
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Filter by reviews</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="reviews-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <div class="SelectMenu-list">
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+review%3Anone" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>No reviews</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+review%3Arequired" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Review required</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+review%3Aapproved" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Approved review</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+review%3Achanges-requested" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Changes requested</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+reviewed-by%3A%40me" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Reviewed by you</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+-reviewed-by%3A%40me" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Not reviewed by you</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+user-review-requested%3A%40me" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Awaiting review from you</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+review-requested%3A%40me" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Awaiting review from you or your team</span>
        </a>
    </div>
  </div>
</details-menu>
</details>

      </span>

<details class="details-reset details-overlay d-inline-block position-relative px-3" id="assignees-select-menu">
<summary class="btn-link" title="Assignees" data-hotkey="a" aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Assignee">
  Assignee
  <span class="dropdown-caret hide-sm"></span>
</summary>
<details-menu class="SelectMenu SelectMenu--hasFilter right-md-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ffilters%2Fassigns_content&amp;pulls_only=true&amp;q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" preload>
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Filter by who’s assigned</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="assignees-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <div class="SelectMenu-filter">
      <input type="text" id="assigns-filter-field" class="SelectMenu-input form-control js-filterable-field" placeholder="Filter users" aria-label="Filter users" autocomplete="off" autofocus>
    </div>
    <div class="SelectMenu-list select-menu-list" data-filter="assignee">
      <div data-filterable-for="assigns-filter-field" data-filterable-type="substring">
        <a class="SelectMenu-item " aria-checked="false" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+no%3Aassignee" role="menuitemradio">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <strong>Assigned to nobody</strong>
        </a>
          <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+assignee%3ACarlosCortizasCT">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
            <img class="avatar flex-shrink-0 mr-2 avatar-user" src="https://avatars.githubusercontent.com/u/97907068?s=40&amp;v=4" width="20" height="20" alt="@CarlosCortizasCT" />
            <strong class="mr-2">CarlosCortizasCT</strong>
            <span class="color-fg-muted css-truncate css-truncate-overflow">Carlos Cortizas</span>
          </a>
        <include-fragment class="SelectMenu-loading">
          <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
        </include-fragment>
      </div>
      </option></form><form class="select-menu-new-item-form js-new-item-form" data-turbo="false" action="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" accept-charset="UTF-8" method="get">
        <input type="hidden" name="q" value="is:pr label:fe-chapter-rotation is:open">
        <button class="SelectMenu-item d-block js-new-item-value" type="submit" name="assignee" role="menuitem">
          <div class="text-bold f5">assignee:<span class="js-new-item-name"></span></div>
          <div class="color-fg-muted">Filter by this user</div>
        </button>
</form>      </div>
  </div>
</details-menu>
</details>


<details class="details-reset details-overlay d-inline-block position-relative pr-3 pr-sm-0 px-3" id="sort-select-menu">
<summary class="btn-link" aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Sort">
  Sort<span></span>
  <span class="dropdown-caret hide-sm"></span>
</summary>
<details-menu class="SelectMenu SelectMenu--hasFilter right-0" role="menu" aria-label="Sort by">
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Sort by</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="sort-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>

    <div class="SelectMenu-list">
        <a class="SelectMenu-item" aria-checked="true" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Newest</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Acreated-asc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Oldest</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Acomments-desc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Most commented</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Acomments-asc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Least commented</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Aupdated-desc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Recently updated</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Aupdated-asc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Least recently updated</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Arelevance-desc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Best match</span>
        </a>

      <div class="SelectMenu-divider">Most reactions</div>
      <div class="clearfix ws-normal p-3 p-sm-2">
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-%2B1-desc">
            <g-emoji alias="+1" fallback-src="https://github.githubassets.com/assets/1f44d-41cb66fe1e22.png" class="emoji m-0 v-align-baseline">👍</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions--1-desc">
            <g-emoji alias="-1" fallback-src="https://github.githubassets.com/assets/1f44e-ce91733aae25.png" class="emoji m-0 v-align-baseline">👎</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-smile-desc">
            <g-emoji alias="smile" fallback-src="https://github.githubassets.com/assets/1f604-7528822fb4c5.png" class="emoji m-0 v-align-baseline">😄</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-tada-desc">
            <g-emoji alias="tada" fallback-src="https://github.githubassets.com/assets/1f389-36899a2cb781.png" class="emoji m-0 v-align-baseline">🎉</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-thinking_face-desc">
            <g-emoji alias="thinking_face" fallback-src="https://github.githubassets.com/assets/1f615-4bb1369c4251.png" class="emoji m-0 v-align-baseline">😕</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-heart-desc">
            <g-emoji alias="heart" fallback-src="https://github.githubassets.com/assets/2764-982dc91ea48a.png" class="emoji m-0 v-align-baseline">❤️</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-rocket-desc">
            <g-emoji alias="rocket" fallback-src="https://github.githubassets.com/assets/1f680-d0ef47fdb515.png" class="emoji m-0 v-align-baseline">🚀</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-eyes-desc">
            <g-emoji alias="eyes" fallback-src="https://github.githubassets.com/assets/1f440-ee44e91e92a7.png" class="emoji m-0 v-align-baseline">👀</g-emoji>
          </a>
      </div>
    </div>
  </div>
</details-menu>
</details>

    </div>
</div>

  <div class="table-list-triage flex-auto js-issues-toolbar-triage">
    <span class="color-fg-muted">
      <span data-check-all-count>0</span> selected
    </span>

    <div class="table-list-header-toggle float-right">
      <span class="js-issue-triage-spinner" hidden>
        <span data-view-component="true">
<svg aria-label="Saving" style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" data-view-component="true" class="v-align-text-bottom anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg></span>
      </span>
      <span class="color-fg-danger f6 js-issue-triage-error" hidden>Something went wrong.</span>
      <details class="details-reset details-overlay select-menu d-inline-block js-issue-triage-menu" data-url="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ftriage%2Factions_content">
  <summary data-view-component="true" class="select-menu-button btn-link">    Mark as
</summary>  <details-menu class="SelectMenu-modal position-absolute right-0" style="z-index: 99;">
  </option></form><form data-turbo="false" action="/commercetools/merchant-center-frontend/issues/triage" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" autocomplete="off" /><input type="hidden" name="authenticity_token" value="KxRsZkbD96zX9hQW4BsTalrCpuXS6rRtxN-z5owjsGnnkbsZ-WmXqN4-NfJRN5AblAWZrFQl8ZbSsNjiCwM0nw" />
    <div class="SelectMenu-header">
      <span class="SelectMenu-title">Actions</span>
    </div>
    <div class="js-triage-deferred-content"></div>
</form>  </details-menu>
</details>

      <details class="details-reset details-overlay select-menu label-select-menu d-inline-block js-issue-triage-menu" data-url="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ftriage%2Flabels_content">
  <summary data-view-component="true" class="select-menu-button btn-link">    Label
</summary>  <details-menu class="SelectMenu-modal position-absolute right-0" style="z-index: 99;">
  </option></form><form data-turbo="false" action="/commercetools/merchant-center-frontend/issues/triage" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" autocomplete="off" /><input type="hidden" name="authenticity_token" value="xPTXDxgDn_EwxQgsUAaRcXhZJDy6h73swW0L9k3fXpIIcQBwp6n_9TkNKcjhKhIAtp4bdTxI-BfXAmDyyv_aZA" />
    <div class="SelectMenu-header">
      <span class="SelectMenu-title">Apply labels</span>
    </div>

    <div class="select-menu-filters">
      <div class="SelectMenu-filter">
        <input
          type="text"
          id="triage-label-filter-field"
          class="SelectMenu-input form-control js-filterable-field"
          placeholder="Filter labels"
          aria-label="Filter labels"
          autocomplete="off"
          autofocus>
      </div>
    </div>

    <div class="js-triage-deferred-content"></div>
</form>  </details-menu>
</details>

        <details class="select-menu details-reset details-overlay d-inline-block position-relative px-3" id="triage-project-select-menu">
  <summary data-view-component="true" class="btn-link">    <span>Projects</span>
  <span class="dropdown-caret hide-sm"></span>
</summary>  <details-menu class="SelectMenu SelectMenu--hasFilter right-lg-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ftriage%2Fprojects_content" preload>
  </option></form><form class="js-project-picker-form" data-turbo="false" action="/commercetools/merchant-center-frontend/issues/triage" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" autocomplete="off" /><input type="hidden" name="authenticity_token" value="c47s3xdxbxSwIHSkP_LD29Ef9WWN4bKp9aUK8MIZbIG_CzugqNsPELnoVUCO3kCqH9jKLAsu91LjymH0RTnodw" />
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Add to project(s)</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="project-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <include-fragment class="SelectMenu-loading">
      <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
    </include-fragment>
  </div>
</form>  </details-menu>
</details>


      <details class="details-reset details-overlay select-menu d-inline-block js-issue-triage-menu" data-url="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ftriage%2Fmilestones_content">
  <summary data-view-component="true" class="select-menu-button btn-link">    Milestone
</summary>  <details-menu class="SelectMenu-modal position-absolute right-0" style="z-index: 99;">
  </option></form><form data-turbo="false" action="/commercetools/merchant-center-frontend/issues/triage" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" autocomplete="off" /><input type="hidden" name="authenticity_token" value="256NcZqalNSJbJdop5hpJjD0R-vr36BUY3i8rVb7lVgXG1oOJTD00ICktowWtOpX_jN4om0Q5a91F9ep0dsRrg" />
    <div class="SelectMenu-header">
      <span class="SelectMenu-title">Set milestone</span>
    </div>

    <div class="select-menu-filters">
      <div class="SelectMenu-filter">
        <input
          type="text"
          id="triage-milestones-filter-field"
          class="SelectMenu-input form-control js-filterable-field"
          placeholder="Filter milestones"
          aria-label="Filter milestones"
          autocomplete="off"
          autofocus>
      </div>
    </div>

    <div class="js-triage-deferred-content"></div>
</form>  </details-menu>
</details>

      <details class="details-reset details-overlay select-menu d-inline-block js-issue-triage-menu" data-url="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ftriage%2Fassigns_content">
  <summary data-view-component="true" class="select-menu-button btn-link">    Assign
</summary>  <details-menu class="SelectMenu-modal position-absolute right-0" style="z-index: 99;">
  </option></form><form data-turbo="false" action="/commercetools/merchant-center-frontend/issues/triage" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" autocomplete="off" /><input type="hidden" name="authenticity_token" value="tZvyTkMQH6tDmnKhk8ikWse0M-nvqPRYqM3dgtyhqgF5HiUx_Lp_r0pSU0Ui5CcrCXMMoGlnsaO-oraGW4Eu9w" />
    <div class="SelectMenu-header">
      <span class="SelectMenu-title">Assign someone</span>
    </div>
    <div class="select-menu-filters">
      <div class="SelectMenu-filter">
        <input
          type="text"
          id="triage-assigns-filter-field"
          class="SelectMenu-input form-control js-filterable-field"
          placeholder="Filter users"
          aria-label="Filter users"
          autocomplete="off"
          autofocus>
      </div>
    </div>

    <div class="js-triage-deferred-content"></div>
</form>  </details-menu>
</details>

      <template class="js-triage-loader-template">
        <include-fragment class="SelectMenu-loading">
          <div data-hide-on-error>
              <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
          </div>
          <div class="text-center p-3" data-show-on-error hidden>
            <p>Something went wrong.</p>
              <button data-retry-button="" type="button" data-view-component="true" class="btn-sm btn">    Retry
</button>
          </div>
        </include-fragment>
      </template>

      <template id="js-triage-add-issues-to-memex-projects-form-success">

<div class="flash flash-full flash-success  ">
<div >
  <button autofocus class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
  </button>
  <div aria-atomic="true" role="alert" class="js-flash-alert">

          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          {{selectedIssueCountLabel}} pull request{{selectedIssuesLabel}} successfully been added to {{selectedMemexProjectsLabel}}

  </div>
</div>
</div>
      </template>
    </div>
  </div>
</div>


    <h2 class='sr-only'>Pull requests list</h2>
    <div aria-label="Issues" role="group" data-issue-and-pr-hovercards-enabled>
      <div class="js-navigation-container js-active-navigation-container" data-hpc>

<div id="issue_18003" class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row " data-id="2691061582" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
<div class="d-flex Box-row--drag-hide position-relative">

    <label class="flex-shrink-0 py-2 pl-3  d-none d-md-block">
      <input type="checkbox" data-check-all-item class="js-issues-list-check" name="issues[]" value="18003" aria-labelledby="issue_18003_link" autocomplete="off">
    </label>

  <div class="flex-shrink-0 pt-2 pl-3">
    <span class="tooltipped tooltipped-e" aria-label="Draft Pull Request">
      <svg class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
    </span>
  </div>

  <!-- Issue title column -->
  <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2">

    <a id="issue_18003_link" class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title" data-hovercard-type="pull_request" data-hovercard-url="/commercetools/merchant-center-frontend/pull/18003/hovercard" href="/commercetools/merchant-center-frontend/pull/18003">[PoC] Migrate test runner from jest to vitest</a>


<batch-deferred-content class="d-inline-block" data-url="/commercetools/merchant-center-frontend/commits/checks-statuses-rollups">
  <input type="hidden" name="oid" value="269f5952fb1ff19be1ed56c3a598908e93ccb720" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="dropdown_direction" value="e" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="disable_live_updates" value="true" data-targets="batch-deferred-content.inputs" autocomplete="off" />



<div class="commit-build-statuses">
  <span class="Skeleton d-inline-block" style="width:12px; height:12px;"></span>
</div>

</batch-deferred-content>

      <span class="lh-default d-block d-md-inline">

<a id="label-362b94" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3Afe-chapter-rotation" data-name="fe-chapter-rotation" style="--label-r:212;--label-g:197;--label-b:249;--label-h:257;--label-s:81;--label-l:87;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              fe-chapter-rotation
</a>
<tool-tip id="tooltip-1fcd7234-8c9b-4e54-9af7-21423f005785" for="label-362b94" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Tasks coming from frontend chapter work</tool-tip>

<a id="label-d4bb51" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3A%22%F0%9F%9A%A7+Status%3A+WIP%22" data-name="🚧 Status: WIP" style="--label-r:238;--label-g:238;--label-b:238;--label-h:0;--label-s:0;--label-l:93;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              🚧 Status: WIP
</a>
      </span>
    <div class="d-flex mt-1 text-small color-fg-muted">
      <span class="opened-by">
        #18003
          opened <relative-time datetime="2024-11-25T14:57:30Z" class="no-wrap">Nov 25, 2024</relative-time> by
          <a class="Link--muted" title="Open pull requests created by CarlosCortizasCT" data-hovercard-type="user" data-hovercard-url="/users/CarlosCortizasCT/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+is%3Aopen+author%3ACarlosCortizasCT">CarlosCortizasCT</a>

      </span>

      <span class="d-none d-md-inline-flex">

<span class="d-inline-block ml-1">
  &bull;
  <a class="Link--muted"
      href="/commercetools/merchant-center-frontend/pull/18003#partial-pull-merging">
    Draft
  </a>
</span>





      </span>

    </div>
  </div>

  <div class="flex-shrink-0 col-4 col-md-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

    <span class="ml-2 flex-1 flex-shrink-0">
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
      <div class="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
        <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
          aria-label="Assigned to ">
        </div>
      </div>
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
        <a href="/commercetools/merchant-center-frontend/pull/18003" class="Link--muted" aria-label="1 comment">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment v-align-middle">
  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
          <span class="text-small text-bold">1</span>
        </a>
    </span>
  </div>

    <a class="d-block d-md-none position-absolute top-0 bottom-0 left-0 right-0" aria-label="Link to Issue. [PoC] Migrate test runner from jest to vitest" href="/commercetools/merchant-center-frontend/pull/18003"></a>
</div>
</div>


<div id="issue_18002" class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row " data-id="2690418497" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
<div class="d-flex Box-row--drag-hide position-relative">

    <label class="flex-shrink-0 py-2 pl-3  d-none d-md-block">
      <input type="checkbox" data-check-all-item class="js-issues-list-check" name="issues[]" value="18002" aria-labelledby="issue_18002_link" autocomplete="off">
    </label>

  <div class="flex-shrink-0 pt-2 pl-3">
    <span class="tooltipped tooltipped-e" aria-label="Open Pull Request">
      <svg class="octicon octicon-git-pull-request color-fg-open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg>
    </span>
  </div>

  <!-- Issue title column -->
  <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2">

    <a id="issue_18002_link" class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title" data-hovercard-type="pull_request" data-hovercard-url="/commercetools/merchant-center-frontend/pull/18002/hovercard" href="/commercetools/merchant-center-frontend/pull/18002">[FEC-131] Provide the migration setup for shared components</a>


<batch-deferred-content class="d-inline-block" data-url="/commercetools/merchant-center-frontend/commits/checks-statuses-rollups">
  <input type="hidden" name="oid" value="02c1693bc7529756a891c88cead06b49427a74ac" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="dropdown_direction" value="e" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="disable_live_updates" value="true" data-targets="batch-deferred-content.inputs" autocomplete="off" />



<div class="commit-build-statuses">
  <span class="Skeleton d-inline-block" style="width:12px; height:12px;"></span>
</div>

</batch-deferred-content>

      <span class="lh-default d-block d-md-inline">

<a id="label-e65d63" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3Afe-chapter-rotation" data-name="fe-chapter-rotation" style="--label-r:212;--label-g:197;--label-b:249;--label-h:257;--label-s:81;--label-l:87;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              fe-chapter-rotation
</a>
<tool-tip id="tooltip-cea04a98-2872-436f-b610-6cf723114b71" for="label-e65d63" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Tasks coming from frontend chapter work</tool-tip>
      </span>
    <div class="d-flex mt-1 text-small color-fg-muted">
      <span class="opened-by">
        #18002
          opened <relative-time datetime="2024-11-25T11:29:36Z" class="no-wrap">Nov 25, 2024</relative-time> by
          <a class="Link--muted" title="Open pull requests created by ahmehri" data-hovercard-type="user" data-hovercard-url="/users/ahmehri/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+is%3Aopen+author%3Aahmehri">ahmehri</a>

      </span>

      <span class="d-none d-md-inline-flex">

<batch-deferred-content data-url="/pull_request_review_decisions">
  <input type="hidden" name="pull_request_id" value="2198200140" data-targets="batch-deferred-content.inputs" autocomplete="off" />


  <span class="Skeleton d-inline-block ml-1 Skeleton--text">Loading…</span>

</batch-deferred-content>




      </span>

    </div>
  </div>

  <div class="flex-shrink-0 col-4 col-md-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

    <span class="ml-2 flex-1 flex-shrink-0">
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
      <div class="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
        <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
          aria-label="Assigned to ahmehri">

            <a class="avatar avatar-user" aria-label="ahmehri’s assigned issues" href="/commercetools/merchant-center-frontend/pulls?q=assignee%3Aahmehri+is%3Aopen">
              <img class="from-avatar avatar-user" src="https://avatars.githubusercontent.com/u/3668245?s=40&amp;v=4" width="20" height="20" alt="@ahmehri" />
</a>          </div>
      </div>
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
        <a href="/commercetools/merchant-center-frontend/pull/18002" class="Link--muted" aria-label="9 comments">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment v-align-middle">
  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
          <span class="text-small text-bold">9</span>
        </a>
    </span>
  </div>

    <a class="d-block d-md-none position-absolute top-0 bottom-0 left-0 right-0" aria-label="Link to Issue. [FEC-131] Provide the migration setup for shared components" href="/commercetools/merchant-center-frontend/pull/18002"></a>
</div>
</div>


<div id="issue_17869" class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row " data-id="2605038663" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
<div class="d-flex Box-row--drag-hide position-relative">

    <label class="flex-shrink-0 py-2 pl-3  d-none d-md-block">
      <input type="checkbox" data-check-all-item class="js-issues-list-check" name="issues[]" value="17869" aria-labelledby="issue_17869_link" autocomplete="off">
    </label>

  <div class="flex-shrink-0 pt-2 pl-3">
    <span class="tooltipped tooltipped-e" aria-label="Draft Pull Request">
      <svg class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
    </span>
  </div>

  <!-- Issue title column -->
  <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2">

    <a id="issue_17869_link" class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title" data-hovercard-type="pull_request" data-hovercard-url="/commercetools/merchant-center-frontend/pull/17869/hovercard" href="/commercetools/merchant-center-frontend/pull/17869">Managing shared components during React Router v6 migration</a>


<batch-deferred-content class="d-inline-block" data-url="/commercetools/merchant-center-frontend/commits/checks-statuses-rollups">
  <input type="hidden" name="oid" value="ae57546d58b637393842419095d69ea657234284" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="dropdown_direction" value="e" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="disable_live_updates" value="true" data-targets="batch-deferred-content.inputs" autocomplete="off" />



<div class="commit-build-statuses">
  <span class="Skeleton d-inline-block" style="width:12px; height:12px;"></span>
</div>

</batch-deferred-content>

      <span class="lh-default d-block d-md-inline">

<a id="label-e6efb1" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3Afe-chapter-rotation" data-name="fe-chapter-rotation" style="--label-r:212;--label-g:197;--label-b:249;--label-h:257;--label-s:81;--label-l:87;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              fe-chapter-rotation
</a>
<tool-tip id="tooltip-dfa97423-327f-46f7-ae7d-fc93a3f16492" for="label-e6efb1" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Tasks coming from frontend chapter work</tool-tip>

<a id="label-34432d" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3A%22%F0%9F%9A%A7+Status%3A+WIP%22" data-name="🚧 Status: WIP" style="--label-r:238;--label-g:238;--label-b:238;--label-h:0;--label-s:0;--label-l:93;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              🚧 Status: WIP
</a>
      </span>
    <div class="d-flex mt-1 text-small color-fg-muted">
      <span class="opened-by">
        #17869
          opened <relative-time datetime="2024-10-22T10:36:42Z" class="no-wrap">Oct 22, 2024</relative-time> by
          <a class="Link--muted" title="Open pull requests created by CarlosCortizasCT" data-hovercard-type="user" data-hovercard-url="/users/CarlosCortizasCT/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+is%3Aopen+author%3ACarlosCortizasCT">CarlosCortizasCT</a>

      </span>

      <span class="d-none d-md-inline-flex">

<span class="d-inline-block ml-1">
  &bull;
  <a class="Link--muted"
      href="/commercetools/merchant-center-frontend/pull/17869#partial-pull-merging">
    Draft
  </a>
</span>





      </span>

    </div>
  </div>

  <div class="flex-shrink-0 col-4 col-md-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

    <span class="ml-2 flex-1 flex-shrink-0">
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
      <div class="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
        <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
          aria-label="Assigned to CarlosCortizasCT">

            <a class="avatar avatar-user" aria-label="CarlosCortizasCT’s assigned issues" href="/commercetools/merchant-center-frontend/pulls?q=assignee%3ACarlosCortizasCT+is%3Aopen">
              <img class="from-avatar avatar-user" src="https://avatars.githubusercontent.com/u/97907068?s=40&amp;v=4" width="20" height="20" alt="@CarlosCortizasCT" />
</a>          </div>
      </div>
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
        <a href="/commercetools/merchant-center-frontend/pull/17869" class="Link--muted" aria-label="3 comments">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment v-align-middle">
  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
          <span class="text-small text-bold">3</span>
        </a>
    </span>
  </div>

    <a class="d-block d-md-none position-absolute top-0 bottom-0 left-0 right-0" aria-label="Link to Issue. Managing shared components during React Router v6 migration" href="/commercetools/merchant-center-frontend/pull/17869"></a>
</div>
</div>


<div id="issue_17475" class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row " data-id="2488283575" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
<div class="d-flex Box-row--drag-hide position-relative">

    <label class="flex-shrink-0 py-2 pl-3  d-none d-md-block">
      <input type="checkbox" data-check-all-item class="js-issues-list-check" name="issues[]" value="17475" aria-labelledby="issue_17475_link" autocomplete="off">
    </label>

  <div class="flex-shrink-0 pt-2 pl-3">
    <span class="tooltipped tooltipped-e" aria-label="Draft Pull Request">
      <svg class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
    </span>
  </div>

  <!-- Issue title column -->
  <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2">

    <a id="issue_17475_link" class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title" data-hovercard-type="pull_request" data-hovercard-url="/commercetools/merchant-center-frontend/pull/17475/hovercard" href="/commercetools/merchant-center-frontend/pull/17475">FEC-39: Test data migration batch 2</a>


<batch-deferred-content class="d-inline-block" data-url="/commercetools/merchant-center-frontend/commits/checks-statuses-rollups">
  <input type="hidden" name="oid" value="dbd46c41302a8e3ddbd3303915caaa8337b90c54" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="dropdown_direction" value="e" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="disable_live_updates" value="true" data-targets="batch-deferred-content.inputs" autocomplete="off" />



<div class="commit-build-statuses">
  <span class="Skeleton d-inline-block" style="width:12px; height:12px;"></span>
</div>

</batch-deferred-content>

      <span class="lh-default d-block d-md-inline">

<a id="label-a891ca" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3Afe-chapter-rotation" data-name="fe-chapter-rotation" style="--label-r:212;--label-g:197;--label-b:249;--label-h:257;--label-s:81;--label-l:87;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              fe-chapter-rotation
</a>
<tool-tip id="tooltip-9d57995b-e033-4c1b-a537-65a7f3d2a5f4" for="label-a891ca" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Tasks coming from frontend chapter work</tool-tip>

<a id="label-28ac55" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3A%22%F0%9F%9B%91+Status%3A+blocked%22" data-name="🛑 Status: blocked" style="--label-r:0;--label-g:0;--label-b:0;--label-h:0;--label-s:0;--label-l:0;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              🛑 Status: blocked
</a>
      </span>
    <div class="d-flex mt-1 text-small color-fg-muted">
      <span class="opened-by">
        #17475
          opened <relative-time datetime="2024-08-27T05:03:36Z" class="no-wrap">Aug 27, 2024</relative-time> by
          <a class="Link--muted" title="Open pull requests created by jaikumar-tj" data-hovercard-type="user" data-hovercard-url="/users/jaikumar-tj/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+is%3Aopen+author%3Ajaikumar-tj">jaikumar-tj</a>

      </span>

      <span class="d-none d-md-inline-flex">

<span class="d-inline-block ml-1">
  &bull;
  <a class="Link--muted"
      href="/commercetools/merchant-center-frontend/pull/17475#partial-pull-merging">
    Draft
  </a>
</span>





      </span>

    </div>
  </div>

  <div class="flex-shrink-0 col-4 col-md-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

    <span class="ml-2 flex-1 flex-shrink-0">
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
      <div class="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
        <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
          aria-label="Assigned to jaikumar-tj">

            <a class="avatar avatar-user" aria-label="jaikumar-tj's assigned issues" href="/commercetools/merchant-center-frontend/pulls?q=assignee%3Ajaikumar-tj+is%3Aopen">
              <img class="from-avatar avatar-user" src="https://avatars.githubusercontent.com/u/83634106?s=40&amp;v=4" width="20" height="20" alt="@jaikumar-tj" />
</a>          </div>
      </div>
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
        <a href="/commercetools/merchant-center-frontend/pull/17475" class="Link--muted" aria-label="2 comments">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment v-align-middle">
  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
          <span class="text-small text-bold">2</span>
        </a>
    </span>
  </div>

    <a class="d-block d-md-none position-absolute top-0 bottom-0 left-0 right-0" aria-label="Link to Issue. FEC-39: Test data migration batch 2" href="/commercetools/merchant-center-frontend/pull/17475"></a>
</div>
</div>


<div id="issue_17397" class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row " data-id="2462751246" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
<div class="d-flex Box-row--drag-hide position-relative">

    <label class="flex-shrink-0 py-2 pl-3  d-none d-md-block">
      <input type="checkbox" data-check-all-item class="js-issues-list-check" name="issues[]" value="17397" aria-labelledby="issue_17397_link" autocomplete="off">
    </label>

  <div class="flex-shrink-0 pt-2 pl-3">
    <span class="tooltipped tooltipped-e" aria-label="Draft Pull Request">
      <svg class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
    </span>
  </div>

  <!-- Issue title column -->
  <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2">

    <a id="issue_17397_link" class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title" data-hovercard-type="pull_request" data-hovercard-url="/commercetools/merchant-center-frontend/pull/17397/hovercard" href="/commercetools/merchant-center-frontend/pull/17397">[FEC-38] Migrate away from local test data models (batch 1)</a>


<batch-deferred-content class="d-inline-block" data-url="/commercetools/merchant-center-frontend/commits/checks-statuses-rollups">
  <input type="hidden" name="oid" value="822afefadd840face1b096f1318676bc7f09a838" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="dropdown_direction" value="e" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="disable_live_updates" value="true" data-targets="batch-deferred-content.inputs" autocomplete="off" />



<div class="commit-build-statuses">
  <span class="Skeleton d-inline-block" style="width:12px; height:12px;"></span>
</div>

</batch-deferred-content>

      <span class="lh-default d-block d-md-inline">

<a id="label-aa9042" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3Afe-chapter-rotation" data-name="fe-chapter-rotation" style="--label-r:212;--label-g:197;--label-b:249;--label-h:257;--label-s:81;--label-l:87;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              fe-chapter-rotation
</a>
<tool-tip id="tooltip-16d47b91-cbe4-4cde-9c0f-7213eabd0d29" for="label-aa9042" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Tasks coming from frontend chapter work</tool-tip>

<a id="label-1a419a" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3A%22%F0%9F%9B%91+Status%3A+blocked%22" data-name="🛑 Status: blocked" style="--label-r:0;--label-g:0;--label-b:0;--label-h:0;--label-s:0;--label-l:0;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              🛑 Status: blocked
</a>
      </span>
    <div class="d-flex mt-1 text-small color-fg-muted">
      <span class="opened-by">
        #17397
          opened <relative-time datetime="2024-08-13T08:37:55Z" class="no-wrap">Aug 13, 2024</relative-time> by
          <a class="Link--muted" title="Open pull requests created by CarlosCortizasCT" data-hovercard-type="user" data-hovercard-url="/users/CarlosCortizasCT/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+is%3Aopen+author%3ACarlosCortizasCT">CarlosCortizasCT</a>

      </span>

      <span class="d-none d-md-inline-flex">

<span class="d-inline-block ml-1">
  &bull;
  <a class="Link--muted"
      href="/commercetools/merchant-center-frontend/pull/17397#partial-pull-merging">
    Draft
  </a>
</span>





      </span>

    </div>
  </div>

  <div class="flex-shrink-0 col-4 col-md-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

    <span class="ml-2 flex-1 flex-shrink-0">
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
      <div class="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
        <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
          aria-label="Assigned to CarlosCortizasCT">

            <a class="avatar avatar-user" aria-label="CarlosCortizasCT’s assigned issues" href="/commercetools/merchant-center-frontend/pulls?q=assignee%3ACarlosCortizasCT+is%3Aopen">
              <img class="from-avatar avatar-user" src="https://avatars.githubusercontent.com/u/97907068?s=40&amp;v=4" width="20" height="20" alt="@CarlosCortizasCT" />
</a>          </div>
      </div>
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
        <a href="/commercetools/merchant-center-frontend/pull/17397" class="Link--muted" aria-label="1 comment">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment v-align-middle">
  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
          <span class="text-small text-bold">1</span>
        </a>
    </span>
  </div>

    <a class="d-block d-md-none position-absolute top-0 bottom-0 left-0 right-0" aria-label="Link to Issue. [FEC-38] Migrate away from local test data models (batch 1)" href="/commercetools/merchant-center-frontend/pull/17397"></a>
</div>
</div>

      </div>
    </div>
</div>

<div class="paginate-container d-none d-sm-flex flex-sm-justify-center">

</div>

<div class="paginate-container d-sm-none mb-5">

</div>

<div id="issues-index-tip" class="mt-3 text-center color-fg-muted">
<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-light-bulb color-fg-muted">
  <path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
<strong class="color-fg-default">ProTip!</strong>
Exclude everything labeled <code class="bg-gray-2 bg-gray-3 p-1 rounded">bug</code> with <a class="Link--inTextBlock" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+-label%3Abug">-label:bug</a>.
</div>



  </div>

</turbo-frame>



<link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/light-3e154969b9f9.css" /><link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/dark-9c5b7a476542.css" /><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-afda8eb0fb33.css" /><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-2494e44ccdc5.css" /><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-56fff47acadc.css" /><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-71cd4cc132ec.css" /><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-fd5499848985.css" /><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-31d17ba3e139.css" /><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-68d6b2c79663.css" />
<link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/repository-d031bcc14e1b.css" />
<script type="application/json" id="client-env">{"locale":"en","featureFlags":["copilot_new_references_ui","copilot_beta_features_opt_in","copilot_chat_static_thread_suggestions","copilot_conversational_ux_history_refs","copilot_implicit_context","copilot_smell_icebreaker_ux","copilot_summary_beta","experimentation_azure_variant_endpoint","failbot_handle_non_errors","geojson_azure_maps","ghost_pilot_confidence_truncation_25","ghost_pilot_confidence_truncation_40","hovercard_accessibility","issues_advanced_search","issues_react_new_timeline","issues_react_avatar_refactor","issues_react_remove_placeholders","issues_react_blur_item_picker_on_close","marketing_pages_search_explore_provider","primer_react_css_modules_ga","react_keyboard_shortcuts_dialog","remove_child_patch","report_hydro_web_vitals","repository_suggester_elastic_search","sample_network_conn_type","site_metered_billing_update","lifecycle_label_name_updates"],"login":"CarlosCortizasCT"}</script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/wp-runtime-c1534f9fffc2.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_oddbird_popover-polyfill_dist_popover_js-aff936e590ed.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_arianotify-polyfill_ariaNotify-polyfill_js-node_modules_github_mi-3abb8f-3f7d38a7b47d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_failbot_failbot_ts-93b6a0551aa9.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/environment-7b93e0f0c8ff.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_behaviors_dist_esm_index_mjs-4aa4b0e95669.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_selector-observer_dist_index_esm_js-f690fd9ae3d5.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_relative-time-element_dist_index_js-6d3967acd51c.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_g-emoji-element_di-6ce195-53781cbc550f.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_auto-complete-element_dist_index_js-node_modules_github_catalyst_-8e9f78-a74b4e0a8a6b.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_text-expander-element_dist_index_js-f5498b8d4e5d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b5f1d7-492b5042c841.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-381a4f-a11b2f0361af.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/github-elements-aa9238e3dc93.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/element-registry-477414219299.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-bb80ec-634de60bacfa.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_lit-html_lit-html_js-ce7225a304c5.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_morphdom_dist_morphdom-e-7c534c-f8a5485c982a.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-d2aff86c7695.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-893f9f-6cf3320416b8.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_color-convert_index_js-0e07cc183eed.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_quote-selection_dist_index_js-node_modules_github_session-resume_-69cfcc-ceb1758d1876.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_updatable-content_updatable-content_ts-3f0e021c7215.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_sso_ts-ui_packages-900dde-24e9d16a679d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_sticky-scroll-into-view_ts-7cbef09a422c.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-d0d0a6-0e9fa537dc4f.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-fb43816ab83c.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-8db99f5dd334.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-f6223d90c7ba.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/notifications-global-3366f6b6298e.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_hotkey_dist_index_js-d92e69b3521a.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_remote-form_dist_-8c3668-44b10f23d8ad.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_form-utils_form-utils_ts-ui_packages_input-navigation-behavior_input-navigation-b-a97423-97468312ad00.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/issues-35ea55736d3c.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/structured-issues-eb321c77cee9.js"></script>

<meta name="turbo-body-classes" content="logged-in env-production page-responsive">

<div id="pjax-head" data-turbo-head>
<title>Pull requests · commercetools/merchant-center-frontend</title>

<meta http-equiv="x-pjax-version" content="bf3f6df9b36cef4624914703ba2dfda940d78c1d75a40736e28dd4ac27f80bf8" data-turbo-track="reload">
<meta http-equiv="x-pjax-csp-version" content="ace39c3b6632770952207593607e6e0be0db363435a8b877b1f96abe6430f345" data-turbo-track="reload">
<meta http-equiv="x-pjax-css-version" content="1fb27b5bf0efbb1230e2590837c93a39cc72f9f723905b9c68584e6cc4b5bc60" data-turbo-track="reload">
<meta http-equiv="x-pjax-js-version" content="f8525cce27f6e4be671125ebe8b9a7fe476451ee7a001d466b8b78f927579f1d" data-turbo-track="reload">
<meta name="route-pattern" content="/:user_id/:repository/pulls(.:format)" data-turbo-transient>
<meta name="route-controller" content="issues" data-turbo-transient>
<meta name="route-action" content="index" data-turbo-transient>

<meta name="selected-link" value="repo_pulls" data-turbo-transient>


<meta name="analytics-location-query-strip" content="true" data-turbo-transient="true" /><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/pull_requests/index" data-turbo-transient="true" />
<meta name="request-id" content="CAD8:3BB6AE:1DE5A55:1E7A6C2:67509E80" data-turbo-transient="true" /><meta name="html-safe-nonce" content="9ddc3fa8a5d94acd2d39d9a3d808187487e55faed92f8e3cadbf8476e8d3a7c3" data-turbo-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9jb21tZXJjZXRvb2xzL21lcmNoYW50LWNlbnRlci1mcm9udGVuZC9wdWxscz9xPWlzJTNBcHIrbGFiZWwlM0FmZS1jaGFwdGVyLXJvdGF0aW9uKyIsInJlcXVlc3RfaWQiOiJDQUQ4OjNCQjZBRToxREU1QTU1OjFFN0E2QzI6Njc1MDlFODAiLCJ2aXNpdG9yX2lkIjoiMjg3OTYzNDE5MTk2Nzg1MDg5NyIsInJlZ2lvbl9lZGdlIjoiZnJhIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-turbo-transient="true" /><meta name="visitor-hmac" content="26edee8d4480fe59bd8884065579c6d315207c522339fd9448a2fab3692a390f" data-turbo-transient="true" />
<link rel="sso-modal" href="/orgs/commercetools/sso_modal" data-turbo-transient="true" /><link rel="sso-session" href="/orgs/commercetools/sso_status.json" data-turbo-transient="true" /><meta name="sso-expires-around" content="1733386425" data-turbo-transient="true" />
<meta name="github-keyboard-shortcuts" content="repository,pull-request-list,pull-request-conversation,pull-request-files-changed,copilot" data-turbo-transient="true" />

  <meta name="hovercard-subject-tag" content="repository:37197353" data-turbo-transient>


<meta name="turbo-cache-control" content="no-preview" data-turbo-transient="">


<meta name="current-catalog-service-hash" content="ae870bc5e265a340912cde392f23dad3671a0a881730ffdadd82f2f57d81641b">


    <link rel="canonical" href="https://github.com/commercetools/merchant-center-frontend/pulls" data-turbo-transient>




</div>

<div id="js-flash-container" class="flash-container" data-turbo-replace>




<template class="js-flash-template">

<div class="flash flash-full   {{ className }}">
<div >
  <button autofocus class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
  </button>
  <div aria-atomic="true" role="alert" class="js-flash-alert">

    <div>{{ message }}</div>

  </div>
</div>
</div>
</template>
</div>

<div id="responsive-meta-container" data-turbo-replace>
</div>



          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="8" data-view-component="true" class="Counter">8</span>

      <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="96" data-view-component="true" class="Counter">96</span>
`;
