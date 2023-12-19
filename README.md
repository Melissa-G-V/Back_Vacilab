# BackEnd Vacilab

Instalar Docker:
https://docs.docker.com/desktop/install/windows-install/
Puxe a imagem:
docker pull postgres
Rode na linha de comando:
 docker run \
      --name postgres \
      -p 5455:5432 \
      -e POSTGRES_USER=postgres \
      -e POSTGRES_PASSWORD=admin \
      -e POSTGRES_DB=vacilab \
      -d \
      postgres


1. De um gitclone no https://github.com/Melissa-G-V/Back_Vacilab.git
2. Entre na pasta vacilab
3. npm i
4. npm run dev
5. Qualquer erro veja no  `data-source.ts` se está correto
6. Run `npm start` command
