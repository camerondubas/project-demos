FROM nginx
MAINTAINER Mujtaba Al-Tameemi <mujtaba.altameemi@gmail.com>

# Make sure API_URL starts with http or https (even for localhost)
ENV API_URL http://localhost
ENV SLACK_WEBHOOK_URL https://hooks.slack.com/services/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
ENV SLACK_PAYLOAD "payload={\"text\": \"Latest version of web image deployed to ${API_URL}\"}"

# Install cURL
RUN apt-get update -y && apt-get install curl -y

# Move the static content to the nginx html (root) dir
COPY static /usr/share/nginx/html

# Move the built files to the nginx html dir
COPY public /usr/share/nginx/html/

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set api url for nginx to proxy the backend requests to, and start nginx
ENTRYPOINT sh -c 'curl -X POST --data-urlencode "${SLACK_PAYLOAD}" ${SLACK_WEBHOOK_URL} && sed -i s@%API_URL%"@$API_URL"@g /etc/nginx/conf.d/default.conf && nginx -g "daemon off;"'
