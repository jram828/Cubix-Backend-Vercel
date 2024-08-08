const getGame = async (payload) => {


  const {
    brandId,
      brandgameId,
      token,
      mode,
      locale,
      lobbyUrl,
      launchUrl
  }=payload;

  //<habanero_launch_url>?brandid={0}&brandgameid={1}&token={2}&mode={3}&locale={4}&lobbyurl={5}
  const URL = `${launchUrl}?brandid=${brandId}&brandgameid=${brandgameId}&token=${token}&mode=${mode}&locale=${locale}&lobbyurl=${lobbyUrl}`;
  console.log("Datos payload", payload);
  try {
    const { data } = await axios.get(URL, payload);
    
    return data;
    
  } catch (error) {
    return error;
  }
};

export { getGame };

