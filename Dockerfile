FROM node:8 as react-build

ENV NODE_ENV prod

WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build


FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]