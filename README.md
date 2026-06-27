# French Barber — Site web

Site statique Next.js 16 du barbershop French Barber à Lagnieu (01150).

---

## Stack technique

| Élément | Version |
|---|---|
| Next.js | 16 (App Router, export statique) |
| React | 19 |
| Tailwind CSS | v4 |
| TypeScript | 5 |
| Hébergement | IONOS WebSpace |

---

## Développement local

```bash
npm install
npm run dev        # http://localhost:3000
```

---

## Modifier le contenu

| Ce que tu veux changer | Fichier |
|---|---|
| Textes, prix, horaires | `src/components/` (le composant correspondant) |
| Email de contact | Voir section **Changer l'email** ci-dessous |
| Téléphone | `src/components/Booking.tsx`, `Footer.tsx`, `FAQ.tsx`, `CTABanner.tsx` |
| Adresse | `src/components/Booking.tsx`, `Footer.tsx`, `FAQ.tsx`, `src/app/layout.tsx` |
| Méta SEO | `src/app/layout.tsx` |
| PHP (formulaire réservation) | `php/contact.php` |

### Changer l'email

L'email apparaît dans **5 fichiers**. Chercher et remplacer l'ancienne adresse partout :

```
src/app/layout.tsx          ← 2 occurrences (schema JSON-LD)
src/components/Booking.tsx  ← 1 occurrence (val: "email@...")  ← utiliser @ pas &#64;
src/components/Footer.tsx   ← 1 occurrence (href + texte)
src/components/FAQ.tsx      ← 2 occurrences (texte FAQ + lien)  ← utiliser @ pas &#64;
php/contact.php             ← 1 occurrence ($to = "...")
```

> **Important :** Dans les chaînes JavaScript (prop `val:`, texte dans tableau), utiliser le vrai caractère `@`, **pas** l'entité HTML `&#64;`. L'entité HTML ne fonctionne que dans le HTML brut, pas dans les strings JS qui passent par React (`{item.val}`).

---

## Déployer sur IONOS

### Prérequis

- `lftp` installé (`brew install lftp`)
- `sshpass` installé (`brew install sshpass`)
- Credentials dans `.env` (ne jamais committer ce fichier)

### Étapes complètes

**1. Builder pour IONOS**

```bash
DEPLOY_TARGET=ionos npm run build
```

> Ne jamais faire juste `npm run build` — sans `DEPLOY_TARGET=ionos`, Next.js ajoute le préfixe `/French-Barber/` à tous les assets (basePath GitHub Pages) → CSS/JS introuvables sur IONOS.

**2. Uploader via lftp**

```bash
lftp -u su165223,BILLALE123 sftp://access-5020687728.webspace-host.com:22 <<'EOF'
set sftp:auto-confirm yes
mirror -R /chemin/absolu/vers/out/ /public/
put /chemin/absolu/vers/php/contact.php -o /public/contact.php
bye
EOF
```

> Remplacer `/chemin/absolu/vers/` par le chemin réel du projet sur ta machine.

**3. Vérifier**

```bash
curl -s -o /dev/null -w "%{http_code}" https://frenchbarber01.com/
# doit retourner 200
```

### Points critiques à retenir

| Règle | Pourquoi |
|---|---|
| Uploader dans `/public/` (pas `/`) | Le webroot HTTPS IONOS est `/public/`, la racine SFTP n'est que le home du compte |
| Ne **jamais** utiliser `--delete` sur le mirror | Risque de supprimer `/public/` ou d'autres dossiers indispensables sur le serveur |
| Toujours re-uploader `contact.php` | Il est dans `php/` mais doit être à la racine du webroot `/public/contact.php` — il n'est pas dans `out/` |
| Builder avec `DEPLOY_TARGET=ionos` | Sans ça, les assets ont un mauvais basePath |

### Structure du serveur IONOS (SFTP)

```
/ (racine SFTP = home du compte su165223)
├── public/          ← WEBROOT APACHE (tout doit aller ici)
│   ├── index.html
│   ├── contact.php
│   ├── _next/
│   ├── favicon.ico
│   └── ...
├── httpdocs/        (dossier inutilisé, peut être ignoré)
└── ...
```

---

## Déployer sur GitHub Pages (développement/preview)

```bash
npm run build        # basePath /French-Barber ajouté automatiquement
```

Pousser sur `main`, GitHub Actions déploie automatiquement sur  
`https://xeloriom-sketch.github.io/French-Barber/`

---

## Formulaire de contact (PHP)

Le formulaire envoie les réservations à `Frenchbarber212@gmail.com` via `php/contact.php`.

- Endpoint en prod : `https://frenchbarber01.com/contact.php`
- Défini dans `src/components/Booking.tsx` → constante `PHP_ENDPOINT`
- Le PHP envoie un email HTML formaté au client

Pour tester l'envoi depuis le terminal :

```bash
curl -s -X POST https://frenchbarber01.com/contact.php \
  -H "Content-Type: application/json" \
  -H "Origin: https://frenchbarber01.com" \
  -d '{"name":"Test","phone":"0600000000","service":"Coupe Classique","date":"2026-07-01","time":"10:00","style":"Dégradé","message":"Test"}'
# réponse attendue : {"success":true,"message":"OK"}
```

---

## Variables d'environnement

| Fichier | Utilisation |
|---|---|
| `.env` | Credentials FTP/SFTP IONOS — **ne jamais committer** |
| `.env.ionos` | `DEPLOY_TARGET=ionos` + `NEXT_PUBLIC_BASE_PATH=` vide |
| `.env.backup` | Sauvegarde des vars de dev |

`.env` est dans `.gitignore`. Ne jamais le pousser sur GitHub.
