import { createSelector } from "@reduxjs/toolkit";
import { ITestSkill } from "../../reducers/test-skill.reducer";
import { RootShareState } from "../../store";

const selectTestsSkill = (state: RootShareState) => state.testsSkill

// export const selectFirstSkill = createSelector([selectTestsSkill], (testsSkill) => {
//     const data = testsSkill.testsSkillProgress
//     if (data.length === 0) return null
//     return data[0]
// })