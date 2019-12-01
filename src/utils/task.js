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
let taskDescriptionValue = '';

/* Go to question by index */
const taskGoToQuestion = index => {
  if (!taskInitialized) {
    taskLatestError = 'Cannot GoToQuestion, task is not initialized.';
    return false;
  }
  if (index > taskQuestions.length) {
    taskLatestError =
      'Index out of the bounds (higher than maximum value passed).';
    return false;
  }
  if (index < 0) {
    taskLatestError = 'Index out of the bounds (lower than zero value passed).';
    return false;
  }
  if (!taskQuestions[index].logicalPolarity) {
    taskLatestError = 'This question is not open (logicalPolarity is false).';
    return false;
  }
  return true;
};

/* Go to next question */
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

/* Go to Previous Question */
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

/* Get all questions data as JSON object */
const taskGetAllQuestionsData = () => {
  return taskQuestions;
};

/* Get Latest Error Description */
const taskGetLatestError = () => {
  return taskLatestError;
};

/* Answer to Current Question */
const taskAnswerToCurrent = answer => {
  if (taskCurrentQuestion > taskGetTaskQuestionsCount() - 1) {
    taskLatestError = 'No questions left - cannot answer to NULL question.'; // TODO translation
    return false;
  }
  return taskAnswerToQuestionByIndex(taskGetCurrentQuestionIndex(), answer);
};

/* Answer to Specified Question by Question Index */
const taskAnswerToQuestionByIndex = (index, answer) => {
  let mathValue = 0;
  if (taskQuestions[index].type === 'select') {
    if (taskQuestions[index].options[answer] === undefined) {
      taskLatestError = 'Select value not found!';
      return false;
    }
    mathValue = taskQuestions[index].options[answer].mathValue;
  }
  taskQuestions[index].answered = true;
  taskQuestions[index].answer.value = answer;
  taskQuestions[index].answer.mathValue = mathValue;
  taskQuestionAnswers[index] = { answer: answer, mathValue: mathValue };
  taskIterate();
  return true;
};

/* Get Loaded Tasks ID */
const taskGetTaskID = () => {
  return taskID;
};

/* Get Boolean value of is Task Initialized */
const taskGetTaskInitialized = () => {
  return taskInitialized;
};

/* Execute/Calculate Locigal Operation Formula */
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

/* Generate Variables based on Answers */
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
    if (!('logicalPolarity' in taskQuestions[i])) {
      taskQuestions[i].logicalPolarity = true;
    }
    if (!('answer' in taskQuestions[i])) {
      taskQuestions[i].answer = { value: null, mathValue: 0 };
    }
  }
  return true;
};

/* Perform Task Question Iteration Operations */
const taskIterate = () => {
  taskGenerateVariables();
  taskIterateLogicalOperations();
  console.log(taskQuestions);
};

/* Iterate through the questions and perform Logical Operations */
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

/* Initialize Task (load task questions and data from Backend Server) */
const taskInit = async initTaskID => {
  return new Promise((resolve, reject) => {
    apiCall('tasks', { task_id: initTaskID })
      .then(response => {
        if (response.success) {
          taskInitialized = true;
          taskID = initTaskID;
          taskDescriptionValue = response.description;
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

/* Get number of Questions in Loaded Task */
const taskGetTaskQuestionsCount = () => {
  return taskQuestions.length;
};

/* Get Current Question Index */
const taskGetCurrentQuestionIndex = () => {
  return taskCurrentQuestion;
};

/* Get JSON Data of Current Question */
const taskGetCurrentQuestionData = () => {
  if (taskIsFinished()) {
    return {
      prompt: 'Thank you! Form is ready for submitting...',
      finished: true,
    };
  } else {
    return taskQuestions[taskGetCurrentQuestionIndex()];
  }
};

/* Get Boolean value is task question answering reached the end. */
const taskIsFinished = () => {
  if (!taskInitialized) return false;
  if (taskQuestions.length === 0) return false;
  if (taskCurrentQuestion === taskQuestions.length) {
    return true;
  }
  return false;
};

/* Submit task Answer Data to the Backend Server */
const taskSubmitData = async () => {
  return new Promise((resolve, reject) => {
    let params = { id: taskID };
    taskQuestions.forEach(q => {
      if (q.answered) {
        params[q.iid] = q.answer.value + '';
      }
    });
    console.log(params);
    apiCall('tasks-answer', params)
      .then(response => {
        if (response.success) {
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

/* Get Task Answer Status in Percents (0-100) */
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

const taskReset = () => {
  taskInitialized = false;
  taskID = 0;
  taskCurrentQuestion = 0;
  taskQuestions = [];
  taskQuestionAnswers = [];
  taskLatestError = '';
  taskVariables = [];
};

const taskDescription = () => {
  return taskDescriptionValue;
};

export {
  taskInit,
  taskAnswerToCurrent,
  taskAnswerToQuestionByIndex,
  taskGoBack,
  taskGoNext,
  taskGoToQuestion,
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
  taskReset,
  taskDescription,
};
