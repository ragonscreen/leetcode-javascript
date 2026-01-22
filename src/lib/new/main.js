import { writeFile } from 'node:fs/promises';
import { program } from 'commander';

const getFlags = () => {
        program.requiredOption('-i, --problem-id <number>', 'id of the problem')
                .requiredOption(
                        '-t, --problem-title <string>',
                        'title of the problem',
                )
                .requiredOption(
                        '-d, --difficulty <string>',
                        'difficulty of the problem',
                )
                .requiredOption(
                        '-f, --function-name <string>',
                        'name of the function',
                );

        program.parse();
        const flags = program.opts();

        return flags;
};

const getDifficulty = (difficulty) => {
        const difficultyMap = {
                e: 'Easy',
                m: 'Medium',
                h: 'Hard',
                easy: 'Easy',
                medium: 'Medium',
                hard: 'Hard',
        };

        return difficultyMap[String(difficulty).toLowerCase()];
};

const getCurrentDate = () => {
        const date = new Date();
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');

        return `${y}-${m}-${d}`;
};

const getTransformedDetails = ({
        problemId,
        problemTitle,
        difficulty,
        functionName,
}) => {
        const problemIdPadded = String(problemId).trim().padStart(4, '0');
        const problemTitleSanitized = String(problemTitle)
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-');
        const filenameBase = `${problemIdPadded}_${problemTitleSanitized}`;
        const filenameSolution = `${filenameBase}.js`;
        const filenameTests = `${filenameBase}.test.js`;

        return {
                id: problemIdPadded,
                titleFull: String(problemTitle).trim(),
                title: problemTitleSanitized,
                difficulty: getDifficulty(difficulty),
                date: getCurrentDate(),
                fn: functionName,
                filenameSolution,
                filenameTests,
        };
};

const writeSolution = async (problemDetails) => {
        const {
                id,
                titleFull,
                title,
                difficulty,
                date,
                fn,
                filenameSolution: filename,
        } = getTransformedDetails(problemDetails);

        const strSolution = `/**
 * ${id}. ${titleFull}
 * Link: https://leetcode.com/problems/${title}/
 * Difficulty: ${difficulty}
 * Date: ${date}
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation:
 * Time Complexity: O()
 * Space Complexity: O()
 */
const ${fn} = () => {};

export { ${fn} };`;

        await writeFile(`src/problems/${filename}`, strSolution);
};

const writeTests = async (problemDetails) => {
        const {
                fn,
                filenameSolution,
                filenameTests: filename,
        } = getTransformedDetails(problemDetails);

        const strTests = `import { describe, expect, test } from 'vitest';
import { ${fn} } from '../src/problems/${filenameSolution}';

describe('${fn}', () => {
        test('basic test 1', () => {
                expect(${fn}()).toStrictEqual();
        });
});`;

        await writeFile(`tests/${filename}`, strTests);
};

const write = async (problemDetails) => {
        await writeSolution(problemDetails);
        writeTests(problemDetails);
};

const main = async () => {
        const problemDetails = getFlags();
        await write(problemDetails);
};

main();
