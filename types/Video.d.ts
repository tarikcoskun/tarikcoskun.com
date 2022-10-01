export interface Video {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: PageInfo
  items: Item[]
}

export interface Item {
  kind: string
  etag: string
  id: ID
  snippet: Snippet
}

export interface ID {
  kind: string
  videoId: string
}

export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

export interface Thumbnails {
  default: Default
  medium: Default
  high: Default
}

export interface Default {
  url: string
  width: number
  height: number
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}
