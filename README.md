# Portfolio Alexis MURER — V5 finale

Ce projet est un site **statique** : il fonctionne uniquement avec HTML, CSS et JavaScript. Il n'y a aucun framework à installer.

## 1. Les trois fichiers importants

- `index.html` : le contenu et la structure du site.
- `styles.css` : le design, les tailles, les couleurs, les animations et le responsive mobile.
- `script.js` : les interactions : thème clair/sombre, animations au scroll, halo de souris et changement FR/EN.

## 2. Comment l'ouvrir sur ton ordinateur

La méthode la plus simple :

1. Dézippe le dossier.
2. Ouvre `index.html` avec Chrome, Firefox, Edge ou Safari.
3. Le site s'affiche immédiatement.

Pour travailler proprement, installe Visual Studio Code : https://code.visualstudio.com/

Ensuite :

1. Ouvre Visual Studio Code.
2. `File > Open Folder`.
3. Sélectionne le dossier `alexis-murer-portfolio`.
4. Installe l'extension **Live Server**.
5. Clique droit sur `index.html` > `Open with Live Server`.

À chaque fois que tu sauvegardes ton code, la page se recharge automatiquement.

## 3. Comprendre le HTML

Le HTML décrit **ce qui existe sur la page**.

Exemple :

```html
<section id="about">
  <h2>À propos</h2>
  <p>Mon texte...</p>
</section>
```

- `<section>` crée une section.
- `id="about"` lui donne un nom utilisable dans les liens.
- `<h2>` est un titre.
- `<p>` est un paragraphe.

Dans le site, les grandes sections sont : `hero`, `about`, `experience`, `skills`, `education` et `contact`.

## 4. Comprendre le CSS

Le CSS contrôle **l'apparence**.

Exemple :

```css
.hero-lead {
  font-size: 1.8rem;
  color: var(--text);
}
```

Cela signifie : « tous les éléments avec `class="hero-lead"` utilisent ces règles visuelles ».

Les couleurs principales se trouvent tout en haut de `styles.css` :

```css
:root {
  --bg: #f4f4ef;
  --text: #101414;
  --accent: #245c4f;
}
```

Si tu changes `--accent`, tu modifies la couleur d'accent de tout le site.

## 5. Comprendre le JavaScript

Le JavaScript contrôle **ce qui bouge ou réagit**.

Exemple :

```javascript
themeToggle.addEventListener("click", () => {
  // changement du thème
});
```

Cela signifie : « quand on clique sur le bouton de thème, exécuter ce code ».

Le fichier `script.js` est volontairement commenté et séparé en cinq parties :

1. année automatique ;
2. thème clair/sombre ;
3. animations au scroll ;
4. halo de souris ;
5. traduction FR/EN.

## 6. Modifier ta photo

La photo est intégrée directement à la racine dans `alexis-murer-portrait.png`. Cette organisation permet au portrait de fonctionner même lorsque le projet est ouvert simplement depuis le dossier extrait.

Pour la remplacer plus tard, conserve simplement le même nom de fichier et les mêmes dimensions approximatives. La règle `object-fit: contain` dans `styles.css` évite toute déformation et maintient le portrait centré.

## 7. Ajouter ton CV

Place ton CV PDF dans le dossier, par exemple :

`CV_Alexis_Murer.pdf`

Puis ajoute dans le HTML :

```html
<a class="button secondary" href="CV_Alexis_Murer.pdf" target="_blank">
  Télécharger mon CV
</a>
```

## 8. Ajouter une nouvelle expérience

Dans la section `.experience-list`, duplique un bloc `<article class="experience-card reveal">...</article>` puis modifie le logo, le visuel, l'entreprise, le lieu, le poste et les missions.

## 9. Mettre le site en ligne gratuitement

### GitHub Pages

1. Crée un compte GitHub.
2. Crée un nouveau repository, par exemple `portfolio`.
3. Envoie les fichiers du site.
4. Va dans `Settings > Pages`.
5. Choisis la branche `main` et `/root`.
6. GitHub te fournira une adresse publique.

### Alternative : Netlify

Tu peux aussi déposer directement le dossier du site sur Netlify. Pour un portfolio statique, c'est très simple.

## 10. Utiliser ton propre nom de domaine

Plus tard, tu pourras acheter un domaine comme :

- `alexismurer.fr`
- `alexismurer.com`
- `alexismurer.dev`

Puis connecter ce domaine à GitHub Pages ou Netlify.

## 11. Contenu de cette version

- photo de profil ;
- expériences distinctes avec missions et résultats ;
- logos et visuels d'entreprise ;
- projets sélectionnés ;
- version française et anglaise ;
- mode clair et sombre ;
- adresse e-mail et lien LinkedIn.

Le CV PDF n'est pas encore inclus, car il n'a pas été ajouté au projet.

Les visuels d'entreprise sont chargés depuis leurs sources en ligne : une connexion internet est donc nécessaire pour les afficher. Avant une publication publique définitive, vérifie les conditions de réutilisation de chaque photo ou remplace-les par tes propres images.

## 12. Conseil important

Ne publie pas automatiquement des informations internes ou confidentielles provenant d'une entreprise. Pour chaque projet professionnel, utilise uniquement les informations dont la publication est autorisée.
