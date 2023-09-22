declare module 'financial-news-api' {
    import { AxiosRequestConfig } from 'axios';
    import { EventEmitter } from 'events';
    import WebSocket from 'ws';
  
    export interface SearchApi {
      getNews(query: any): Promise<{ articles: any[] }>;
    }
  
    export interface StreamApi extends EventEmitter {
      on(event: 'articles', listener: (articles: any[]) => void): this;
      on(event: 'error', listener: (error: string) => void): this;
      on(event: 'open' | 'close', listener: () => void): this;
    }
  
    export function SearchApi(apiKey: string): SearchApi;
  
    export function StreamApi(apiKey: string): StreamApi;
  }
  