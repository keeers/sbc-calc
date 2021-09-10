export default class Ratings {
    constructor(inputList) {
        this._inputList = inputList;
    }


    calculateRatings() {
        this._averageRatingValue = 0;
        this._values = [];
        this._adjustedValues = [];
        this._counter = 0;
        this._inputList.forEach(input => {
            this._averageRatingValue += +input.value;
            this._values.push(+input.value);
        });
        this._values.forEach(value => {
            this._adjustedValues.push(Math.max(0, value - (this._averageRatingValue / 11)))
        })
        this._adjustedResults = this._adjustedValues.reduce((sum, current) => {
            return sum + current;
        }, 0)
        this._adjustTotal = Math.round(this._adjustedResults + this._averageRatingValue);
        this._averageRating = ((this._adjustTotal / 11)).toFixed(2)
        this._teamRating = Math.floor(((this._adjustTotal / 11)));
    };

    getRatings() {
        return { TeamRating: this._teamRating, AverageRating: this._averageRating };
    };

    teamList() {
        this._teamArray = [];
        this._teamCount = {};
        this._teamList = '';
        this._inputList.forEach(input => {
            this._teamArray.push(+input.value);
        });
        for (let i = 0; i < this._teamArray.length; i++) {
            this._teamCount[this._teamArray[i]] = !this._teamCount[this._teamArray[i]] ? 1 : this._teamCount[this._teamArray[i]] + 1;
        };
        for (let i = 0; i < 100; i++) {
            if (this._teamCount[i] !== undefined) {
                this._teamList = this._teamList + this._teamCount[i] + "x" + i + " ";
            };
        };
        return this._teamList;
    };

}