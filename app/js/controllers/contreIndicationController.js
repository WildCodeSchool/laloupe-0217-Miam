angular.module('app')
    .controller('ContreIndicationController', function($scope) {
      const textInput = document.getElementById('textInput');
      const suggestionUl = document.getElementById('suggestion');
      const suggestionContainer = document.getElementById('suggestion-container');
      let picker = -1;
      let picked = false;

      const fruits = ["Apple", "Apricot", "Avocado", "Banana", "Bilberry", "Blackberry", "Blackcurrant", "Blueberry", "Boysenberry", "Currant", "Cherry", "Cherimoya", "Cloudberry", "Coconut", "Cranberry", "Custard apple", "Damson", "Date", "Dragonfruit", "Durian", "Elderberry", "Feijoa", "Fig", "Fruit", "Goji berry", "Gooseberry", "Grape", "Grapefruit", "Guava", "Honeyberry", "Huckleberry", "Jabuticaba", "Jackfruit", "Jambul", "Jujube", "Juniper berry", "Kiwifruit", "Kumquat", "Lemon", "Lime", "Loquat", "Longan", "Lychee", "Mango", "Marionberry", "Melon", "Cantaloupe", "Honeydew","Watermelon", "Miracle fruit", "Mulberry", "Nectarine", "Nance", "Olive", "Orange","Blood orange","Clementine","Mandarine","Tangerine", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon", "Physalis", "Plantain", "Plum","Prune (dried plum)", "Pineapple", "Plumcot (or Pluot)", "Pomegranate", "Pomelo", "Purple mangosteen", "Quince", "Raspberry","Salmonberry", "Rambutan", "Redcurrant", "Salal berry", "Salak", "Satsuma", "Star fruit", "Strawberry", "Tamarillo", "Tamarind", "Tomato", "Ugli fruit", "Yuzu"];

      suggestionContainer.hidden = true;
      textInput.addEventListener('input', suggestionBox);

      function suggestionBox(e) {
        const input = e.target.value;

        if (input === "") {
          suggestionUl.innerHTML = "";
          suggestionContainer.hidden = true;
        } else {
          let list = "";
          let matchedFruits = fruits.filter(fruit => input.slice(0, input.length).toLowerCase() === fruit.toLowerCase().slice(0, input.length));

          if (matchedFruits.length === 0) {
            suggestionContainer.hidden = true;
          } else {
            for (let i = 0; i < matchedFruits.length; i++) {
              list = list.concat('<li>' + matchedFruits[i] + '</li>');
            }

            suggestionContainer.hidden = false;
            suggestionUl.innerHTML = list;

            let suggestions = document.getElementsByTagName('LI');
            let mapped = Array.from(suggestions).forEach((suggestion) => {
              suggestion.addEventListener('click', populateInput);
            });
           }
        }

        picker = -1;
      }

      function populateInput(e) {
        const selectedFruit = e.target.innerHTML;
        textInput.value = selectedFruit;
      }

      document.addEventListener('keydown', function(e){
        let suggestions = Array.from(document.getElementsByTagName('LI'));

        if (e.keyCode === 9) {
          e.preventDefault();

          picker++;

          if (picker < suggestions.length) {
            suggestions.forEach(suggestion => {
              if (suggestion.style.backgroundColor === 'slategray') {
                suggestion.style.backgroundColor = '';
                suggestion.style.color = 'black';
              }
            });

            let style = suggestions[picker].style;
            style.backgroundColor = 'slategray';
            style.color = 'white';
          } else {
            picker = -1;
          }
        } else if (e.keyCode === 13) {
          e.preventDefault();
          if (suggestions[picker]) {
            textInput.value = suggestions[picker].innerHTML;
            suggestionUl.innerHTML = "";
            suggestionContainer.hidden = true;
          }
        }
      }, false);



    });
