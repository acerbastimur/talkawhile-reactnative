export interface Playphrase {
    count: number;
    phrases: PhrasesItem[];
    suggestions: SuggestionsItem[];
    'next-word-suggestion': string;
}
export interface PhrasesItem {
    'video-info': {
        info: string;
        imdb: string;
    };
    words: WordsItem[];
    start: number;
    'video-url': string;
    movie: string;
    id: string;
    end: number;
    text: string;
}
interface WordsItem {
    text: string;
    start: number;
    end: number;
}
interface SuggestionsItem {
    text: string;
    count: number;
}
