/**
 * Jeu du nombre mystère
 * @author  Evan
 * @version 0.1
 * @since   30.08.2022
 */

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let nbMystere = tireNombre(1, 100);
    let nbEssaie = 0;
    while (true) {
        let reponse = Number(prompt(` Entrez un nombre en 1 et 100 `));
        nbEssaie++;
        if (reponse === nbMystere) {
            alert(`Vous avez trouvé après ${nbEssaie} essais.`);
            return;
        } else {
            if (reponse > nbMystere) {
                alert(`C'est moins`);
            } else {
                alert(`C'est plus`);
            }
        }
    }
}()); // main IIFE
