
import { MultipleResponse, MatchingHeading, FillTheBlank, MatchingFillBlank as MultipleChoiceType, Dropdown, Matching, MatchingFillBlank } from "./Question";

export type UnionType =
  | MultipleChoiceType
  | MultipleResponse
  | Dropdown
  | Matching
  | MatchingHeading
  | FillTheBlank
  | MatchingFillBlank;