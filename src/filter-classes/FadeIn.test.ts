import FadeIn from "./FadeIn";
import InvalidArgumentError from "../errors/InvalidArgumentError";

describe('FadeIn: Should set correct duration.', () => {
    const durations = [
        0, 1000, 3333
    ];

    durations.forEach((duration) => {
        test("Duration - " + duration + "ms", () => {
            const fadeIn = new FadeIn(duration);
            expect(fadeIn.toObject().duration).toBe(duration);
        });
    });

    test("And throw error when negative value", () => {
        expect(() => {
            new FadeIn(-1);
        }).toThrowError(InvalidArgumentError);

        expect(() => {
          new FadeIn(-1000);
        }).toThrowError(InvalidArgumentError);
    });
});