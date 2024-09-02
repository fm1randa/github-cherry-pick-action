export interface Inputs {
  token: string
  committer: string
  author: string
  branch: string
  title?: string
  body?: string
  labels: string[]
  inherit_labels?: boolean
  assignees: string[]
  reviewers: string[]
  teamReviewers: string[]
  cherryPickBranch?: string
  force?: boolean
}
