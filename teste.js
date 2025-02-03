const answerButtons = document.querySelectorAll('.option-button');

answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        answerButtons.forEach(btn => btn.parentElement.classList.remove('selected'));

        button.parentElement.classList.add('selected');
    });
});

const imageButton = document.querySelector('.image-button');
const warningIcon = document.querySelector('.warning-icon');
const questionButton = document.querySelector('.question-button'); 
const popupImage = document.getElementById('popup-image');
const popupForm = document.getElementById('popup-form');
const popupGabarito = document.getElementById('popup-gabarito'); 

// Função para mostrar o pop-up de imagem
imageButton.addEventListener('click', () => {
    popupImage.style.display = 'flex'; 
});

// Função para mostrar o pop-up de reportar
warningIcon.addEventListener('click', () => {
    popupForm.style.display = 'flex'; 
});

// Função para mostrar o pop-up de gabarito 
questionButton.addEventListener('click', () => {
    popupGabarito.style.display = 'flex'; 
});

popupImage.addEventListener('click', (e) => {
    if (e.target === popupImage) {
        popupImage.style.display = 'none'; 
    }
});

popupForm.addEventListener('click', (e) => {
    if (e.target === popupForm) {
        popupForm.style.display = 'none'; 
    }
});

popupGabarito.addEventListener('click', (e) => {
    if (e.target === popupGabarito) {
        popupGabarito.style.display = 'none'; 
    }
});

// Responder a questão
const submitButton = document.querySelector('.submit-button');
let selectedAnswer = null;
const correctAnswer = 'B';

// Desativa o botão de questão inicialmente
questionButton.disabled = true;
questionButton.style.backgroundColor = '#F5F5F5'; 
questionButton.style.color = '#858585';

// Função para selecionar resposta
answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!submitButton.disabled) {
            answerButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedAnswer = button.textContent.trim(); 

            submitButton.style.backgroundColor = '#FF9600'; 
            submitButton.style.color = '#ffffff';
            submitButton.disabled = false;
        }
    });
});

// Função para validar a resposta
submitButton.addEventListener('click', () => {
    if (!selectedAnswer) return; 

    submitButton.style.backgroundColor = '#F5F5F5'; 
    submitButton.style.color = '#858585';
    submitButton.disabled = true;
    
    // Valida a resposta e altera as cores
    answerButtons.forEach(button => {
        const answer = button.textContent.trim();
        if (answer === correctAnswer) {
            button.style.backgroundColor = '#00C851';
            button.style.color = '#ffffff';
            button.style.border = '#00C851';
        } else if (answer === selectedAnswer) {
            button.style.backgroundColor = '#FF4444'; 
            button.style.color = '#ffffff';
            button.style.border = '#FF4444';
        }

        button.disabled = true;
        button.style.cursor = 'not-allowed'; 
    });
    

    questionButton.style.backgroundColor = '#FF9600'; 
    questionButton.style.color = '#ffffff';
    questionButton.disabled = false;
});

const expandIcon = document.getElementById('expand-icon');
const expandPopup = document.getElementById('expand-popup');
const closePopup = document.getElementById('close-popup');

// Função para abrir o pop-up
expandIcon.addEventListener('click', () => {
    expandPopup.style.display = 'flex';
});

// Função para fechar o pop-up
closePopup.addEventListener('click', () => {
    expandPopup.style.display = 'none';
});

// Fechar o pop-up clicando fora do conteúdo
expandPopup.addEventListener('click', (e) => {
    if (e.target === expandPopup) {
        expandPopup.style.display = 'none';
    }
});

const questionTextElement = document.querySelector('.question-text'); 
const popupQuestion = document.getElementById('popup-question'); 
const popupQuestionText = document.querySelector('#popup-question .popup-text'); 
const closePopupQuestion = document.getElementById('close-popup-question'); 

// Função para truncar o texto da questão e adicionar evento de exibição do pop-up
const originalQuestionText = questionTextElement.textContent.trim();

if (originalQuestionText.length > 440) {
    const truncatedQuestionText = originalQuestionText.slice(0, 440) + '...';
    questionTextElement.textContent = truncatedQuestionText; 

    questionTextElement.addEventListener('click', () => {
        popupQuestionText.textContent = originalQuestionText; 
        popupQuestion.style.display = 'flex'; 
    });
}

popupQuestion.addEventListener('click', (e) => {
    if (e.target === popupQuestion || e.target === closePopupQuestion) {
        popupQuestion.style.display = 'none'; 
    }
});

closePopupQuestion.addEventListener('click', () => {
    popupQuestion.style.display = 'none';
});

// Função da imagem do gabarito

const popupLarge = document.getElementById('popup-large-image');
const openPopupButton = document.getElementById('detailed-response');
const closePopupButton = document.getElementById('close-popup');

openPopupButton.addEventListener('click', (e) => {
    popupLarge.style.display = 'flex';
});

closePopupButton.addEventListener('click', () => {
    popupLarge.style.display = 'none';
});

// Função para aumentar itens

document.addEventListener('DOMContentLoaded', () =>{
const answers = document.querySelectorAll('.answer')
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');

answers.forEach(answer => {
    answer.addEventListener('click', () => {
        console.log('Div clicada!'); 

        
        const paragraph = answer.querySelector('p').textContent;
        console.log('Texto capturado do parágrafo:', paragraph); 

        modalText.textContent = paragraph;
        modal.style.display = 'flex';
        console.log('Modal exibido com texto:', paragraph);
    });
});


window.addEventListener('click', event => {
    if (event.target === modal) {
        console.log('Clicou fora do modal, fechando...'); 
        modal.style.display = 'none';
    }
});
});







