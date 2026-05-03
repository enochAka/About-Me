window.onload = () => {
    const introDiv = document.getElementById("intro");
    const hobbiesDiv = document.getElementById("hobbies");
    const hobbiesButton = document.getElementById("hobbiesbutton");
    const introButton = document.getElementById("introbutton");
    const click = document.getElementById("click");
    const quiz = document.getElementById("quizmain");
    const quizQuestion = document.getElementById("question");
    const options = [document.getElementById("optiona"), document.getElementById("optionb"), document.getElementById("optionc")];
    const optionsDiv = document.getElementById("options")
    const quizStart = document.getElementById("startbutton");
    const toggleButton = document.getElementById("toggleModes")
    const scrollImg = document.getElementById("scrollImg");
    function toggleHobbies() {
        if (hobbiesDiv.style.height == "inherit") {
            hobbiesDiv.style.height = "60px";
            hobbiesButton.innerHTML = "Expand";
        } else {
            hobbiesDiv.style.height = "inherit";
            hobbiesButton.innerHTML = "Minimise";
        }
    }
    function toggleIntro() {
        if (introDiv.style.height == "inherit") {
            introDiv.style.height = "60px";
            introButton.innerHTML = "Expand";
        } else {
            click.style.display = "none";
            introDiv.style.height = "inherit";
            introButton.innerHTML = "Minimise";
        }
    }
    function startQuiz() {
        const existingGoHome = optionsDiv.querySelector('a');
        if (existingGoHome) {
            optionsDiv.removeChild(existingGoHome);
        }
        quizStart.style.display = "none"
        quiz.style.display = "block";
        quizQuestion.style.color = "white";
        optionsDiv.style.display = "flex";
        quizQuestion.innerHTML = "Where was Enoch born?";
        options[0].style.display = "block";
        options[1].style.display = "block";
        options[2].style.display = "block";
        options[0].innerHTML = "a) Lagos";
        options[1].innerHTML = "b) Laois";
        options[2].innerHTML = "c) Louth";
        options[2].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "green";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Correct!";
            setTimeout(question2, 1000)
            
        }
        options[0].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "red";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Wrong!";
            setTimeout(startQuiz, 1000);
        }
        options[1].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "red";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Wrong!";
            setTimeout(startQuiz, 1000);
            
        }
    }
    function question2() {
        quizStart.style.display = "none"
        quiz.style.display = "block";
        quizQuestion.style.color = "white";
        optionsDiv.style.display = "flex";
        quizQuestion.innerHTML = "Where does Enoch live now?";
        options[0].style.display = "block";
        options[1].style.display = "block";
        options[2].style.display = "block";
        options[0].innerHTML = "a) Dublin, Ireland";
        options[1].innerHTML = "b) Sligo, Ireland";
        options[2].innerHTML = "c) Sligo, Britan";
        options[1].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "green";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Correct!";
            setTimeout(question3, 1000)
            
        }
        options[2].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "red";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Wrong!";
            setTimeout(question2, 1000);
        }
        options[0].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "red";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Wrong!";
            setTimeout(question2, 1000);
            
        }
    }
    function question3() {
        quizStart.style.display = "none"
        quiz.style.display = "block";
        quizQuestion.style.color = "white";
        optionsDiv.style.display = "flex";
        quizQuestion.innerHTML = "Where does Enoch go to school?";
        options[0].style.display = "block";
        options[1].style.display = "block";
        options[2].style.display = "block";
        options[0].innerHTML = "a) Coola";
        options[1].innerHTML = "b) Coolaney";
        options[2].innerHTML = "c) Colooney";
        options[0].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "green";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Correct!";
            setTimeout(question4, 1000)
            
        }
        options[2].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "red";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Wrong!";
            setTimeout(question3, 1000);
        }
        options[1].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "red";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Wrong!";
            setTimeout(question3, 1000);
            
        }
    }
    function question4() {
        quizStart.style.display = "none"
        quiz.style.display = "block";
        quizQuestion.style.color = "white";
        optionsDiv.style.display = "flex";
        quizQuestion.innerHTML = "What is Enoch's last name?";
        options[0].style.display = "block";
        options[1].style.display = "block";
        options[2].style.display = "block";
        options[0].innerHTML = "a) Akendo";
        options[1].innerHTML = "b) Acande";
        options[2].innerHTML = "c) Akande";
        options[2].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "green";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Correct!";
            setTimeout(question5, 1000)
            
        }
        options[0].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "red";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Wrong!";
            setTimeout(question4, 1000);
        }
        options[1].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "red";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Wrong!";
            setTimeout(question4, 1000);
        }
    }
    function question5() {
        quizStart.style.display = "none"
        quiz.style.display = "block";
        quizQuestion.style.color = "white";
        optionsDiv.style.display = "flex";
        quizQuestion.innerHTML = "What is Enoch's dream?";
        options[0].style.display = "block";
        options[1].style.display = "block";
        options[2].style.display = "block";
        options[0].innerHTML = "a) To become a world-famous piano player";
        options[1].innerHTML = "b) To become a world-famous swimmer";
        options[2].innerHTML = "c) To become a world-famous programmer";
        options[2].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "green";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Well done!";
            setTimeout(quizEnd, 1000)
            
        }
        options[0].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "red";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Wrong!";
            setTimeout(question5, 1000);
        }
        options[1].onclick = () => {
            options[0].style.display = "none";
            options[1].style.display = "none";
            options[2].style.display = "none";
            quizQuestion.style.color = "red";
            quizQuestion.style.display = "block";
            quizQuestion.innerHTML = "Wrong!";
            setTimeout(question5, 1000);
        }
    }
    function quizEnd() {
        options[0].innerHTML = "Restart Quiz";
        options[0].style.display = "block";
        options[0].onclick = startQuiz;
        const goHome = document.createElement("a");
        const node = document.createTextNode("Go home");
        goHome.appendChild(node);
        goHome.style.display = "block";
        goHome.setAttribute("href", "index.html");
        optionsDiv.appendChild(goHome);
    }
    introDiv.addEventListener("mouseover", () => {
        
        scrollImg.classList.add("show");
    });
    introDiv.addEventListener("scroll", () => {
        introDiv.classList.add("scrolling");
        scrollImg.classList.remove("show");
    });

    if (quiz) {
        quiz.style.display = "none";
    }
    if (quizStart) {
        quizStart.onclick = startQuiz;
    }
    if (hobbiesButton) {
        hobbiesButton.onclick = toggleHobbies;
    }
    if (introButton) {
        introButton.onclick = toggleIntro;
    }
}