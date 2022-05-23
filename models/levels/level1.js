const level1 = new Level(
    [
        new BackgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0, 0),
        new BackgroundObjects('img/5.Fondo/Capas/3.Fondo3/1.png', 0, 0, 0.3),
        new BackgroundObjects('img/5.Fondo/Capas/3.Fondo3/2.png', 1, 0, 0.3),
        new BackgroundObjects('img/5.Fondo/Capas/2.Fondo2/1.png', 0, 0, 0.5),
        new BackgroundObjects('img/5.Fondo/Capas/2.Fondo2/2.png', 1, 0, 0.5),
        new BackgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0, 0, 1),
        new BackgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1, 0, 1),
    ], [
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 0, 0),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 1, 0),
    ], [new Chicken(), new Chicken(), new Chicken(), new Chicken()],

    [new Coins(), new Coins(), new Coins(), new Coins(), new Coins()], [
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
    ]
);