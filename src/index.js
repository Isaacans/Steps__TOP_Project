import "./styles.css"; // Loads the style sheet
import "./module.js"; // Adds the module to the page
// Check above is required

// Description behavior
class CanHaveDescription {
    // Private fields declaration
    #description;

    constructor(description = '') {
        this.#description = description;
    }

    changeDescription(newDescription = '') {
        this.#description = newDescription;
    }

    getDescription() {
        return this.#description;
    }
}

// Due date behavior
class CanHaveDueDate {
    // Private fields declaration
    #dueDate;

    constructor() {
        this.#dueDate = null;
    }

    setDueDate(dueDate, dateValidator = new DateValidator()) {
        if (!dateValidator.isValid(dueDate)) {
            console.warn(`Invalid due date: ${dueDate}. Defaulting to '24 hours'.`);
            const today = new Date();
            const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
            this.#dueDate = tomorrow;
        } else {
            this.#dueDate = new Date(dueDate);
        }
    }

    getDueDate() {
        return this.#dueDate ? this.#dueDate : false;
    }
}

// Date validation logic
class DateValidator {
    isValid(date) {
        const parsedDate = new Date(date);
        return !isNaN(parsedDate.getTime());
    }
}

// MiniStep class following SRP and Composition
class MiniStep {
    constructor(description) {
        this.description = new CanHaveDescription(description);
        this.dueDate = new CanHaveDueDate();
    }
}

// Step class using composition to have multiple mini-steps
class Step {
    constructor(description) {
        this.description = new CanHaveDescription(description);
        this.dueDate = new CanHaveDueDate();
        this.miniSteps = [];
    }

    addMiniStep(description) {
        const miniStep = new MiniStep(description);
        this.miniSteps.push(miniStep);
    }
}

// Objective class responsible only for maintaining objectives, with composition for behavior
class Objective {
    #dueDate;
    #type;

    static allowedTypes = ['task', 'project', 'goal'];

    constructor(type, name = 'name', dueDate, description) {
        this.#type = this.validateType(type);
        this.name = name;
        this.description = new CanHaveDescription(description);
        this.#dueDate = new CanHaveDueDate();
        this.#dueDate.setDueDate(dueDate);
        this.steps = [];
    }

    validateType(type) {
        if (!Objective.allowedTypes.includes(type)) {
            console.warn(`Invalid type: ${type}. Defaulting to 'task'.`);
            return 'task';
        }
        return type;
    }

    changeType(type) {
        this.#type = this.validateType(type);
    }

    describeObjective() {
        console.log(`${capitalizeFirstLetter(this.name)} - ${capitalizeFirstLetter(this.#type)}`);
        console.log(`Description: ${this.description.description}`);
        console.log(`Due Date: ${this.#dueDate.getDueDate()}`);
    }

    addStep(description) {
        const step = new Step(description);
        this.steps.push(step);
    }
}

// Handy functions moved to separate utility for SRP
function capitalizeFirstLetter(string) {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// Global exposure for testing in browser console
global.Objective = Objective;
global.Step = Step;
global.isValidDate = new DateValidator().isValid;




// Testing the objects
global.obj = new Objective('project', 'Buy PC', '31oct24');
