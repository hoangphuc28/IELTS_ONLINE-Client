
import { MultipleResponse, MatchingHeading, FillTheBlank, MatchingFillBlank as MultipleChoiceType, Dropdown, DragAndDrop, MatchingFillBlank } from "./Question";

export type UnionType =
  | MultipleChoiceType
  | MultipleResponse
  | Dropdown
  | DragAndDrop
  | MatchingHeading
  | FillTheBlank
  | MatchingFillBlank;