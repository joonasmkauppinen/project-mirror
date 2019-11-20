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
//import { evalMath } from './evalmath'; // TODO: Implementation

let taskInitialized = false;
let taskID = 0;
let taskCurrentQuestion = 0;
let taskQuestions = [];
let taskQuestionAnswers = [];
let taskLatestError = '';

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
  taskQuestionAnswers[index] = { answer: answer, mathValue: 0 };
  return true; // TODO
};

const taskGetTaskID = () => {
  return taskID;
};

const taskGetTaskInitialized = () => {
  return taskInitialized;
};

const taskInit = async initTaskID => {
  return new Promise((resolve, reject) => {
    apiCall('tasks', { task_id: initTaskID })
      .then(response => {
        if (response.success) {
          taskInitialized = true;
          taskID = initTaskID;
          taskQuestions = response.tasks[0].questions;
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
  return taskQuestions[taskGetCurrentQuestionIndex()];
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
  taskIsFinished,
  taskSubmitData,
  taskGetTaskInitialized,
  taskGetTaskID,
  taskGetTaskQuestionsCount,
  taskGetCurrentQuestionIndex,
  taskGetCurrentQuestionData,
  taskGetPercentageProgress,
  taskGetLatestError,
};
