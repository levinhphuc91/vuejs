<template>
  <div class="contact-us">
    <section class="contact-us__section">
      <div class="container">
        <div class="row contact-us__section__content">
          <div class="col-12 title text-center">
            Contact Us
          </div>
          <div class="col-12 desc text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum velit mi. Quisque nec nunc eu orci tincidunt dignissim id.
          </div>
          <div class="row contact-us__section__content__email">
            <div class="col-12 col-md-6 contact-us__section__content__email__desc">
              <div class="contact">
                <div class="email">support@mobilecavalry.com</div>
                <div class="email-desc">Email us any questions you have, we will get back to you as soon as humanly possible.</div>
              </div>
              <div class="contact">
                <div class="email">press@mobilecavalry.com</div>
                <div class="email-desc">We play nice. If you'd like to develop a new story, mention us in a news report or interview MC, or one of the crew.</div>
              </div>
              <div class="contact">
                <div class="email">partners@mobilecavalry.com</div>
                <div class="email-desc">We'd love to hear from you if you are representing a hospital, doctor's office, LTC or a retirement home and would like to partner with us!</div>
              </div>
              <div class="contact">
                <div class="email">sup@mobilecavalry.com</div>
                <div class="email-desc">All other awesomeness can be sent here.</div>
              </div>
              <div class="button-social">
                <a href="/"><img src="~@Assets/contact-us/fb-button.svg" /></a>
                <a href="/"><img src="~@Assets/contact-us/twitter-button.svg" /></a>
                <a href="/"><img src="~@Assets/contact-us/instagram-button.svg" /></a>
              </div>
            </div>
            <div class="col-12 col-md-6 contact-us__section__content__email__address">
              <div class="map">
                <img src="http://www.respectmyplanet.org/publications/wp-content/uploads/2015/11/political-map-world-1200x813.jpg" />
              </div>
              <div class="address-content">
                <div class="name">
                  Vancouver
                </div>
                <div class="address-desc">
                  833 Seymour St, Vancouver, BC V6B 0G4, Canada
                </div>
              </div>
              <div class="map">
                <img src="http://www.respectmyplanet.org/publications/wp-content/uploads/2015/11/political-map-world-1200x813.jpg" />
              </div>
              <div class="address-content">
                <div class="name">
                  Singapore
                </div>
                <div class="address-desc">
                  79 Ayer Rajah Crescent, Block 79, Singapore 139955
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { HEADER_EV, CHANGE_PAGE } from '../../events/HeaderEvent';

export default {
  name: 'contact-us',
  mounted() {
    this.changeBGHeader();
  },
  methods: {
    changeBGHeader() {
      HEADER_EV.emit(CHANGE_PAGE, 'contact-us');
    },
  },
};
</script>
