import "../src/js/wizard.js";
import Wizzard from "../src/js/wizard.js";

describe("Wizard.damage", () => {
    let wiz;
    beforeEach(() => {
        wiz = new Wizzard("test", 40);
    });

    test("Should reduce wizards health by 5", () => {
        wiz.damage(5);
        expect(wiz.health).toEqual(35);
    });
});