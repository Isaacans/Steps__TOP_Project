 `// Use this file to track ideas and brainstorming`

 1. Brainstorm requirements list   
    ___To-Do___
      1. Pick objective type (task/goal/project)
      1. Set name, description and due-date for each objective
      1. Change type, name, description and due-date for each objective
      1. Objective can exist with 0 or more 'steps'
    1. Add, remove and edit steps
    1. Each step can exist with 0 or more 'mini-steps'
    1. Steps and mini-steps are only a description (text field/string)
    1. Steps are associated with objectives and mini-steps are associated with steps
    1. Mini-steps can be added, removed or edited
    1. Mini-steps can toggled completed/incomplete
    1. Steps without any mini-steps attached can be toggled completed/incomplete
    1. Steps with mini-steps attached will automatically toggle completed/incomplete based on whether associated mini-steps are all marked completed or not and cannot be toggle directly
    1. Project will be marked as completed once all steps are marked as completed     
    
    
    ___Tracker___
    1. Shows list of mini-step/step/objective in order they are due
    1. Shows due-date changes (the time/date it was change and what it was changed from and to)
    1. Shows number of steps/mini-steps completed on each date
    1. Shows a graph of steps completed over the last week

 2. Design app
    1. Use classes (ES6) for readable syntax and inheritance
    1. Follow SOLID principles
      1. Single responsibility/reason to change
         1. Objective will be one object with...
            either prototype or methods to create steps...
            steps inherit from objectives?
            mini-steps inherit from steps?
            composition gives them due-dates and descriptions?
      1. Open to extension, closed to modification
      1. Liskov substitution principle
      1. Interface segregation
      1. Dependency inversion
         1.
    1. Works in console first
 4. Design UI
 5. Add UI
 6. Beautify UI
 7. Refractor 