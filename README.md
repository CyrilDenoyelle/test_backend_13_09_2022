API DOC
===

Bonjour !

## Pour lancer le server
> node index.js

à la racine du projet

## API Doc

### `POST /login`
req:
```json
{
    "email": "String",  // Adresse email de l'utilisateur  
    "password_hash": "String" // Hash du mot de passe utilisateur *(défini plus haut)*
}
```
res:
```json
{
    "status": 200 // ou 401
}
```

### `GET /products`:
res:
```json
{
    "payload":
        [{ // liste de produits
            "id" // Identifiant unique du produit  
            "label" // Nom du produit à afficher  
            "description" // Description du produit  
            "price" // Prix en centimes (integer)  
            "category_id" // Identifiant de la catégorie parente  
            "thumbnail_url" // URL vers l'image miniature  
            "visible_public" // Si le produit doit être affiché au public  
            "isible_authenticated" // Si le produit doit être affiché lorsque connecté  
        }],
        "status": 200
}
```

### `GET /categories`

res:
```json
{
    "payload":
        [{ // liste de categories
            "id" // Identifiant unique du produit  
            "index" // Index de la catégorie dans la boutique  
            "label" // Nom du produit à afficher  
            "description" // Description du produit  
        }],
        "status": 200
}
```
