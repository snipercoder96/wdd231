function basicMovements() {
    // Start lesson from the "Learn more" button
    const startButton = document.getElementById("basic-movements-button");
    const modal1 = document.getElementById("modal1");

    startButton.addEventListener("click", () =>{
        modal1.showModal();
    });


    const modals = [
        document.getElementById("modal1"),
        document.getElementById("modal2"),
        document.getElementById("modal3"),
        document.getElementById("modal4"),
        document.getElementById("modal5"),
        document.getElementById("modal6"),
    ];

    modals.forEach((modal, index) => {
        // Close button
        const closeBtn = modal.querySelector(`#close-modal${index + 1}`);
        if (closeBtn) {
            closeBtn.addEventListener("click", () => modal.close());
        }

        const nextBtn = modal.querySelector(`#next${index + 1}`);
        if (nextBtn && modals[index + 1]) {
            nextBtn.addEventListener("click", () => {
                modal.close();
                modals[index + 1].showModal();
            });
        }
    });

    const finishBtn = document.getElementById("finish");
    if (finishBtn) {
        finishBtn.addEventListener("click", () => {
            modals[modals.length - 1].close();
        });
    }
}

function openingPrinciples() {
    // start by grabbing the button id and the first modal
    const startButton = document.getElementById("opening-principles-button");
    const modal1 = document.getElementById("openingDialog1");

    // open the first modal when button is clicked
    startButton.addEventListener("click", () => {
        modal1.showModal();
    });

    // put modals in a list
    const modals = [
        document.getElementById("openingDialog1"),
        document.getElementById("openingDialog2"),
        document.getElementById("openingDialog3"),
        document.getElementById("openingDialog4"),
        document.getElementById("openingDialog5"),
        document.getElementById("openingDialog6")
    ];

    // loop through each modal
    modals.forEach((modal, index) => {
        // Close button
        const closeBtn = modal.querySelector(`#close-opening${index + 1}`);
        if (closeBtn) {
            closeBtn.addEventListener("click", () => modal.close());
        }

        // Next button (except last modal)
        const nextBtn = modal.querySelector(`#nextopening${index + 1}`);
        if (nextBtn && modals[index + 1]) {
            nextBtn.addEventListener("click", () => {
                modal.close();
                modals[index + 1].showModal();
            });
        }
    });

    // Finish button on the last modal
    const finishBtn = document.getElementById("finish-opening");
    if (finishBtn) {
        finishBtn.addEventListener("click", () => {
            modals[modals.length - 1].close();
        });
    }
}

function tacticsAndStrategy() {
    // Start button to open the first modal
    const startButton = document.getElementById("Tactics-n-strategy-button");
    const modal1 = document.getElementById("tacticsDialog1");

    startButton.addEventListener("click", () => {
        modal1.showModal();
    });

    // Put modals in a list
    const modals = [
        document.getElementById("tacticsDialog1"), // Forks
        document.getElementById("tacticsDialog2"), // Pins
        document.getElementById("tacticsDialog4")  // Outposts
    ];

    modals.forEach((modal, index) => {
        // Close button
        const closeBtn = modal.querySelector(`#close-tactics${index + 1}`);
        if (closeBtn) {
            closeBtn.addEventListener("click", () => modal.close());
        }


        const nextBtn = modal.querySelector(`#nexttactics${index + 1}`);
        if (nextBtn && modals[index + 1]) {
            nextBtn.addEventListener("click", () => {
                modal.close();
                modals[index + 1].showModal();
            });
        }
    });

    const finishBtn = document.getElementById("finish-tactics");
    if (finishBtn) {
        finishBtn.addEventListener("click", () => {
            modals[modals.length - 1].close();
        });
    }
}


function endgameFundamentals() {
    // Start button to open the first modal
    const startButton = document.getElementById("endgame-fundamentals-button");
    const modal1 = document.getElementById("endgameDialog1");

    startButton.addEventListener("click", () => {
        modal1.showModal();
    });

    // Put modals in a list
    const modals = [
        document.getElementById("endgameDialog1"), // Pawn Promotion
        document.getElementById("endgameDialog2"), // Opposition
        document.getElementById("endgameDialog3")  // Rook Activity
    ];

    // Loop through each modal
    modals.forEach((modal, index) => {
        // Close button
        const closeBtn = modal.querySelector(`#close-endgame${index + 1}`);
        if (closeBtn) {
            closeBtn.addEventListener("click", () => modal.close());
        }

        const nextBtn = modal.querySelector(`#nextendgame${index + 1}`);
        if (nextBtn && modals[index + 1]) {
            nextBtn.addEventListener("click", () => {
                modal.close();
                modals[index + 1].showModal();
            });
        }
    });
    const finishBtn = document.getElementById("finish-endgame");
    if (finishBtn) {
        finishBtn.addEventListener("click", () => {
            modals[modals.length - 1].close();
        });
    }
}




export { basicMovements, openingPrinciples, tacticsAndStrategy, endgameFundamentals };
