function membershipCards() {
  const dialog = document.getElementById("membershipInfo");


  const activateDialog = document.querySelectorAll("#NPO, #Bronze, #Silver, #Gold");

  activateDialog.forEach(button => {
    
    const closeDialog = document.getElementById("closeDialog");
    button.addEventListener("click", (event) => {
        const id = event.target.id;

        switch (id) {
            case "NPO":
            dialog.innerHTML = `
                <h2>Non Profit Organization</h2>
                <p>Designed for NGOs and community groups, this level provides discounted membership fees, access to networking events, and visibility in our directory to help amplify your mission without straining your budget.</p>
                <button class="closeDialog">Close</button>
            `;
            break;
            case "Bronze":
            dialog.innerHTML = `
                <h2>🥉 Bronze Membership</h2>
                <p>Perfect for small businesses starting out. Bronze members receive directory listings, invitations to quarterly mixers, and basic promotional opportunities to grow brand awareness locally.</p>
                <button class="closeDialog">Close</button>
            `;
            break;
            case "Silver":
            dialog.innerHTML = `
                <h2>🥈 Silver Membership</h2>
                <p>Ideal for established businesses seeking more exposure. Silver members enjoy enhanced directory placement, discounted advertising packages, and priority access to training workshops and seminars.</p>
                <button class="closeDialog">Close</button>
            `;
            break;
            case "Gold":
            dialog.innerHTML = `
                <h2>👑 Gold Membership</h2>
                <p>Our premium tier for leaders in the community. Gold members gain top-tier directory placement, featured spotlight articles, VIP invitations to exclusive events, and strategic partnership opportunities with the Chamber.</p>
                <button class="closeDialog">Close</button>
            `;
            break;
        }

        dialog.showModal();

        const closeBtn = dialog.querySelector(".closeDialog"); 
        closeBtn.addEventListener("click", () => { dialog.close(); });
        });

    });
}

export { membershipCards };
