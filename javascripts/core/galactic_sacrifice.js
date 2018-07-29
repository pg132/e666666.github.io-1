function getGSAmount() {
    return Decimal.min(new Decimal(player.galaxies + player.replicanti.galaxies + player.dilation.freeGalaxies),player.eightAmount.div(50).floor())
}

function galacticSacrifice() {
    if (getGSAmount().lt(1)) return false
    player.infinityPoints = player.infinityPoints.add(getGSAmount())
    player.galaxies = -1
    galaxyReset()
}
