import { finalRating, teamList, averageRating, inputList, ratingSelector, sidebar, sidebarButton, sidebarText, sidebarLinks, sidebarActive, sidebarButtonActive, sidebarTextActive, sidebarLinksActive, inputButton, inputSelector } from '../utils/constants.js'
import Ratings from '../components/Ratings.js'
import './index.css'

const ratings = new Ratings(inputList);
const finalRatingResult = finalRating.querySelector(ratingSelector);
const averageRatingResult = averageRating.querySelector(ratingSelector);
const teamListResult = teamList.querySelector(ratingSelector);

inputList.forEach(input => {
    input.addEventListener('blur', () => {
        ratings.calculateRatings();
        const getRatings = ratings.getRatings();
        averageRatingResult.textContent = getRatings.AverageRating;
        finalRatingResult.textContent = getRatings.TeamRating;
        teamListResult.textContent = ratings.teamList();
    });
    input.addEventListener('focus', (e) => {
        e.target.select()
    })
});

sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle(sidebarActive);
    sidebarButton.classList.toggle(sidebarButtonActive);
    sidebarText.classList.toggle(sidebarTextActive);
    sidebarLinks.classList.toggle(sidebarLinksActive);
});

inputButton.addEventListener('click', () => {
    document.querySelector(inputSelector).select();
});




