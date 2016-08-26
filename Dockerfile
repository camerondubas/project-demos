FROM nginx
MAINTAINER Mujtaba Al-Tameemi <mujtaba.altameemi@gmail.com>

# Move the built files to the nginx html (root) dir
COPY public /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# TODO if you want to enable slack notifications on app start follow these steps, otherwise, you can delete lines 13-22.
# 1. uncomment lines 17-22, but keep lines 21 and 19 commented,
# 2. delete lines 24-25
# 3. update the slack webhook url on line 20
# ENV SLACK_WEBHOOK_URL https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
# ENV SLACK_PAYLOAD "payload={\"text\": \"Latest version of app started\"}"
# Install cURL
# RUN apt-get update -y && apt-get install curl -y
# Post a slack notification on start and start nginx
# ENTRYPOINT sh -c 'curl -X POST --data-urlencode "${SLACK_PAYLOAD}" ${SLACK_WEBHOOK_URL} && nginx -g "daemon off;"'

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80 443