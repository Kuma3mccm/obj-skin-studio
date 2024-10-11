class SharedData {

    static createDefaultBones() {
        return [
            {
                "name": "root",
                "pivot": [ 0.0, 0.0, 0.0 ]
            },
            {
                "name": "body",
                "parent": "waist",
                "pivot": [ 0.0, 24.0, 0.0 ]
            },

            {
                "name": "waist",
                "parent": "root",
                "pivot": [ 0.0, 12.0, 0.0 ]
            },

            {
                "name": "head",
                "parent": "body",
                "pivot": [ 0.0, 24.0, 0.0 ]
            },

            {
                "name": "hat",
                "parent": "head",
                "pivot": [ 0.0, 24.0, 0.0 ]
            },

            {
                "name": "helmet",
                "parent": "head",
                "pivot": [ 0.0, 24.0, 0.0 ]
            },

            {
                "name": "cape",
                "pivot": [ 0.0, 24, 3.0 ],
                "parent": "body"
            },
            {
                "name": "hat",
                "parent": "head",
                "pivot": [ 0.0, 24.0, 0.0 ]
            },
            {
                "name": "leftArm",
                "parent": "body",
                "pivot": [ -5.0, 22.0, 0.0 ]
            },
            {
                "name": "leftSleeve",
                "parent": "leftArm",
                "pivot": [ -5.0, 22.0, 0.0 ]
            },
            {
                "name": "leftItem",
                "pivot": [ -6.0, 15.0, 1.0 ],
                "parent": "leftArm"
            },
            {
                "name": "rightArm",
                "parent": "body",
                "pivot": [ 5.0, 22.0, 0.0 ]
            },
            {
                "name": "rightSleeve",
                "parent": "rightArm",
                "pivot": [ 5.0, 22.0, 0.0 ]
            },
            {
                "name": "rightItem",
                "pivot": [ 6, 15, 1 ],
                "locators": {
                    "lead_hold": [ -6, 15, 1 ]
                },
                "parent": "rightArm"
            },

            {
                "name": "leftLeg",
                "parent": "root",
                "pivot": [ -1.9, 12.0, 0.0 ]
            },
            {
                "name": "leftPants",
                "parent": "leftLeg",
                "pivot": [ -1.9, 12.0, 0.0 ]
            },

            {
                "name": "rightLeg",
                "parent": "root",
                "pivot": [ 1.9, 12.0, 0.0 ]
            },
            {
                "name": "rightPants",
                "parent": "rightLeg",
                "pivot": [ 1.9, 12.0, 0.0 ]
            },

            {
                "name": "jacket",
                "parent": "body",
                "pivot": [ 0.0, 24.0, 0.0 ]
            },

            {
                "name": "flip",
                "parent": "head",
                "pivot": [ 3.7, 5.05, 4.75 ],
                "rotation": [ 0.0, -90.0, 15.0]
            },

            {
                "name": "neck",
                "parent": "flip",
                "pivot": [ 3.7, 5.05, 4.75 ]
            },

            {
                "name": "tail",
                "parent": "head",
                "pivot": [ 0.0, 19.4, 4.5 ]
            },

            {
                "name": "frontlegr",
                "parent": "body",
                "pivot": [ 0.0, 6.625, 1.0 ],
                "rotation": [ 0.0, 22.5, 90.0]
            },

            {
                "name": "frontlegl",
                "parent": "frontlegr",
                "pivot": [ 0.0, 6.625, 2.35 ],
                "rotation": [ -25.5778, -14.2906, 4.6066]
            },

            {
                "name": "backlegl",
                "parent": "frontlegl",
                "pivot": [ 0.0, 6.625, 1.0 ],
                "rotation": [ -25.5778, -14.2906, 4.6066]
            },

            {
                "name": "backlegr",
                "parent": "backlegl",
                "pivot": [ 0.0, 6.625, 1.0 ],
                "rotation": [ 21.2449, 22.3749, 0.7409]
            },
        ];
    }

}
