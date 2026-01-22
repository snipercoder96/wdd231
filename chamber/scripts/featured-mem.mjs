async function featuredMembers() {
    try {
        const response = await fetch("./data/members.json");
        const data = await response.json();

        const spotlightMembers = data.filter(member =>
            member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
        );

        const shuffled = spotlightMembers.sort(() => Math.random() - 0.5);

        const businessInfo = document.getElementById("business-info");

        for (let i = 0; i < 3 && i < shuffled.length; i++) {
            const member = shuffled[i];
            const div = document.createElement("div");
            div.className = "members-card";

            if (member.membershipLevel === "Silver") {
                div.innerHTML = `
                    <h2>${member.name}</h2>
                    <img src="${member.image}" alt="${member.name} logo">
                    <p><strong>Phone: </strong>${member.phone}</p>
                    <p><strong>Address: </strong>${member.address}</p>
                    <p><strong>Website: </strong><a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level: </strong>🥈 ${member.membershipLevel}</p>
                `;
            } else {
                div.innerHTML = `
                    <h2>${member.name}</h2>
                    <img src="${member.image}" alt="${member.name} logo">
                    <p><strong>Phone: </strong>${member.phone}</p>
                    <p><strong>Address: </strong>${member.address}</p>
                    <p><strong>Website: </strong><a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level: </strong>🥇 ${member.membershipLevel}</p>
                `;
            }

            businessInfo.appendChild(div);
        }
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

export { featuredMembers };
