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

    test("Should reduce wizards health to 0", () => {
        wiz.damage(45);
        expect(wiz.health).toEqual(0);
    });

    test("Deal damage to other wizard", () => {
        let wiz2 = new Wizzard("bad", 30);
        wiz.rollDamage();
        wiz2.damage(wiz.roll + 1);
        expect(wiz2.health).toBeLessThan(30);
    });
});