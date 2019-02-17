FROM ruby:2.3.7

RUN set -e \
      && apt-get update -y -qq \
      && apt-get install -y -qq --no-install-recommends mysql-client tzdata vim \
      && rm -rf /var/lib/apt/lists/* \
      && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
      && echo "Asia/Tokyo" > /etc/timezone \
      && gem install bundler --pre \
      && mkdir app

WORKDIR /app

COPY Gemfile ./Gemfile
COPY Gemfile.lock ./Gemfile.lock
RUN bundle install

COPY . .

CMD rails server -p $PORT -e $RAILS_EMV
