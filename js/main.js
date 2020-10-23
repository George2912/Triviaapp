function getValuesQuestion() {
    const questionsQuantity = document.getElementById('questions-number').value
    const questionsDifficulty = document.getElementById('questions-difficulty').value
    const questionCategories = document.getElementById('questions-categorys').value
    const questionType = document.getElementById('questions-type').value
    //   console.log(questionsQuantity+questionsDifficulty)
        getQuestions(questionsQuantity,questionsDifficulty, questionCategories, questionType);
          return questionsQuantity,questionsDifficulty, questionCategories, questionType     
  }
  function getQuestions(questionsQuantity,questionsDifficulty,questionCategories,questionType) {
      fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&difficulty=${questionsDifficulty}&category=${questionCategories}&type=${questionType}`)
          .then(response => response.json())
          .then(data => {
            printCards(data.results);
            returnQuestions(data.results);

          })
  }

  function getCategories() {
    fetch(`https://opentdb.com/api_category.php`)
    .then(response => response.json())
    .then(data => printCategorys(data.trivia_categories))
}

function printCategorys(categorys) {
    const select = document.getElementById('questions-categorys');
    // select.innerHTML ='';
    categorys.forEach(category => {
        const selectCategory = returnCategory(category);
        select.innerHTML += selectCategory;
    });
}

function returnCategory(category) {
    const selectCategory =  `<option value="${category.id}">${category.name}</option>`
    return selectCategory
}
  function printCards(questions) {
      const container = document.getElementById('container-cards');
      container.innerHTML = '';
      questions.forEach(question => {
          const card = returnCardHTML(question);
          container.innerHTML += card;
      });
      // poner las preguntas en mi página web
  }
  function returnCardHTML(q) {
      const card = `<div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${q.category}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                            <div>
                            ${returnAnswersHTML(q.correct_answer, q.incorrect_answers)} </div>          
                        </div>
                    </div>`
      return card;
  }
  function returnAnswersHTML(correct, incorrects) {
      
      const correctHTML =  `<div class="form-check">
                                <label class="form-check-label for="${correct}">
                                <input class="form-check-input" type="radio" name="${correct}" value="correct" id="answers" checked >
                                ${correct}
                                </label>
                            </div>`;
      let incorrectHTML = '';
      incorrects.forEach((incorrect) => {
          incorrectHTML += `<div class="form-check">
                                <label class="form-check-label for="${correct}">
                                <input class="form-check-input" type="radio" name="${correct}" value="incorrect" id="answers" checked >
                                ${incorrect}
                                </label>
                            </div>`;             
      })
      return correctHTML + incorrectHTML;
  }
  //obtener el score

function Sendscore() {
    var questions = new Array();
    var answerUser= new Array();
    var incorrects = 0;
    var counts = 0;

}

  //obtener el array pintado
function returnQuestions(questionsPrint) {
console.log(questionsPrint)
    const correctsAnswers = questionsPrint.map(function(correctanswer) {
        return correctanswer.correct_answer
    })

}   
    

  getValuesQuestion()
  getQuestions()
  getCategories()