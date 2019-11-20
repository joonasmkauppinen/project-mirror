/*

    ████████╗ █████╗ ███████╗██╗  ██╗
    ╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
       ██║   ███████║███████╗█████╔╝ 
       ██║   ██╔══██║╚════██║██╔═██╗ 
       ██║   ██║  ██║███████║██║  ██╗
       ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                    
    ███ © 2019 Team Alpha ███████████

    Task Answering Frontend Helper Module
    https://github.com/joonasmkauppinen/project-mirror
                                          
*/

import { apiCall } from './apicall';
import { evalMath } from './evalmath';

let taskInitialized = false;
let taskID = 0;
let taskCurrentQuestion = 0;
let taskQuestions = [];
let taskQuestionAnswers = [];
let taskLatestError = '';
let taskVariables = [];

const taskGoNext = () => {
  if (!taskInitialized) {
    taskLatestError = 'Cannot go next, task is not initialized.';
    return false;
  }
  if (taskCurrentQuestion === taskQuestions.length) {
    taskLatestError = 'Cannot go next, current question is the last.';
    return false;
  }
  for (let i = taskCurrentQuestion + 1; i <= taskQuestions.length; i++) {
    if (i === taskQuestions.length) {
      taskCurrentQuestion = i;
      return true;
    }
    if (taskQuestions[i].logicalPolarity) {
      taskCurrentQuestion = i;
      return true;
    }
  }
  return true;
};

const taskGoBack = () => {
  if (!taskInitialized) {
    taskLatestError = 'Cannot go back, task is not initialized.';
    return false;
  }
  if (taskCurrentQuestion === 0) {
    taskLatestError = 'Cannot go back, current question is the first.';
    return false;
  }
  taskCurrentQuestion--;
  return true;
};

const taskGetAllQuestionsData = () => {
  return taskQuestions;
};

const taskGetLatestError = () => {
  return taskLatestError;
};

const taskAnswerToCurrent = answer => {
  if (taskCurrentQuestion > taskGetTaskQuestionsCount() - 1) {
    taskLatestError = 'No questions left - cannot answer to NULL question.'; // TODO translation
    return false;
  }
  return taskAnswerToQuestionByIndex(taskGetCurrentQuestionIndex(), answer);
};

const taskAnswerToQuestionByIndex = (index, answer) => {
  let mathValue = 0;
  if (taskQuestions[index].type === 'select') {
    if (taskQuestions[index].options[answer] === undefined) {
      taskLatestError = 'Select value not found!';
      return false;
    }
    mathValue = taskQuestions[index].options[answer].mathValue;
  }
  taskQuestionAnswers[index] = { answer: answer, mathValue: mathValue };
  taskIterate();
  taskGoNext();
  return true;
};

const taskGetTaskID = () => {
  return taskID;
};

const taskGetTaskInitialized = () => {
  return taskInitialized;
};

const taskExecLogicalOper = formula => {
  if (taskVariables.length > 0) {
    taskVariables.forEach(i => {
      const variableReplaceRegex = new RegExp(i.name, 'g');
      formula = formula.replace(variableReplaceRegex, i.value);
    });
  }
  const isAllowedRegex = /^[0-9. =<>&()|-]/;
  if (!isAllowedRegex.test(formula)) return false;
  const logicalCheck = evalMath(formula);
  console.log(`exec: ${formula} LC= ${logicalCheck}`);
  if (logicalCheck === true) {
    return true;
  }
  return false;
};

const taskGenerateVariables = () => {
  taskVariables = [];
  if (!taskInitialized || taskQuestions.length === 0) return false;
  for (let i = 0; i < taskQuestions.length; i++) {
    if (taskQuestionAnswers[i] !== undefined) {
      taskVariables.push({
        name: taskQuestions[i].iid,
        value: taskQuestionAnswers[i].mathValue,
      });
    }
    //console.log(`${taskQuestions[i].iid} => ${output}`);
    if (!('logicalPolarity' in taskQuestions[i])) {
      taskQuestions[i].logicalPolarity = true;
    }
  }
  return true;
};

const taskIterate = () => {
  taskGenerateVariables();
  taskIterateLogicalOperations();
  console.log(taskQuestions);
};

const taskIterateLogicalOperations = (parent = 0, logicalPolarity = true) => {
  if (!taskInitialized || taskQuestions.length === 0) return false;
  for (let i = 0; i < taskQuestions.length; i++) {
    if (taskQuestions[i].parent === parent) {
      if (logicalPolarity && 'formula' in taskQuestions[i]) {
        logicalPolarity = taskExecLogicalOper(taskQuestions[i].formula);
      }
      taskQuestions[i].logicalPolarity = logicalPolarity;
      taskIterateLogicalOperations(taskQuestions[i].id);
    }
  }
};

const taskInit = async initTaskID => {
  return new Promise((resolve, reject) => {
    apiCall('tasks', { task_id: initTaskID })
      .then(response => {
        if (response.success) {
          taskInitialized = true;
          taskID = initTaskID;
          taskQuestions = response.tasks[0].questions;
          taskIterate();
          resolve({ success: true });
        } else {
          reject(response.error);
        }
      })
      .catch(e => {
        reject(e);
      });
  });
};

const taskGetTaskQuestionsCount = () => {
  return taskQuestions.length;
};

const taskGetCurrentQuestionIndex = () => {
  return taskCurrentQuestion;
};

const taskGetCurrentQuestionData = () => {
  if (taskCurrentQuestion === taskQuestions.length) {
    return {
      prompt: 'Thank you! Form is ready for submitting...',
      finished: true,
    };
  } else {
    return taskQuestions[taskGetCurrentQuestionIndex()];
  }
};

const taskIsFinished = () => {
  return false; // TODO!
};

const taskSubmitData = () => {
  return { success: false, error: 'TODO' }; // TODO!
};

const taskGetPercentageProgress = () => {
  if (taskGetTaskQuestionsCount() === 0) {
    return 0;
  } else {
    return parseInt(
      (taskCurrentQuestion / taskGetTaskQuestionsCount()) * 100,
      10,
    );
  }
};

export {
  taskInit,
  taskAnswerToCurrent,
  taskAnswerToQuestionByIndex,
  taskGoBack,
  taskGoNext,
  taskIsFinished,
  taskSubmitData,
  taskGetTaskInitialized,
  taskGetTaskID,
  taskGetTaskQuestionsCount,
  taskGetCurrentQuestionIndex,
  taskGetCurrentQuestionData,
  taskGetAllQuestionsData,
  taskGetPercentageProgress,
  taskGetLatestError,
};
