export type LogLevel = 'info' | 'success' | 'warn' | 'error' | 'astra' | 'debug';

export interface LogChannel {
  name: string;
  enabled: boolean;
  color: string;
  emoji: string;
  prefix: string;
}

export interface ErrorAnalysis {
  type: string;
  possibleCause: string;
  solutionSuggestion: string;
}
