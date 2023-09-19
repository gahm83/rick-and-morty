const Character = async ({ params: { idCharacter } }) => {
  // const jsonImgs: ImageType[] = await (
  //   await fetch(
  //     `${IMGS_BASE_URL}/v2/list?page=${Number(limit) / 2}&limit=${limit}`
  //   )
  // ).json();
  const characterData = await (
    await fetch('http://localhost:3000/api/character', {
      // cache: 'no-cache',
      // cache: 'no-store',
      next: {
        revalidate: 0,
      },
    })
  ).json();

  console.log(characterData);

  return (
    <div>
      <h2>{idCharacter}</h2>
    </div>
  );
};

export default Character;