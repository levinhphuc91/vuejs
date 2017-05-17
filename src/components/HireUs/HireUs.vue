<template>
  <div class="hire-us">
    <div class="hire-us__header">
      <p class="hire-us__header__title">Hire Us</p>
    </div>

    <div class="hire-us__content container">
      <div class="row">
        <div class="col-12">
          <p class="hire-us__content__title">Hire The Marketing Dream Team</p>
          <p class="hire-us__content__description">No fluff. Just damn good results and positive return on investments. Write your details and learn how we can help lead your team to victory now. </p>
        </div>
      </div>
      <div class="row form">
        <div class="col-12">
          <div class="hire-us__content__form">
            <form class="row">
              <div class="form-group col-md-6">
                <label class="hire-us__content__form__label" for="formName">Name</label>
                <input type="text" class="form-control hire-us__content__form__input" id="formName" placeholder="e.g. Kenny Grant">
              </div>
              <div class="form-group col-md-6">
                <label class="hire-us__content__form__label" for="formPhone">Phone</label>
                <input type="text" class="form-control hire-us__content__form__input" id="formPhone" placeholder="Your phone number">
              </div>

              <div class="form-group col-md-6">
                <label class="hire-us__content__form__label" for="formEmail">Email</label>
                <input type="text" class="form-control hire-us__content__form__input" id="formEmail" placeholder="e.g. kenny@email.com">
              </div>

              <div class="form-group col-md-6">
                <label class="hire-us__content__form__label" for="formBudget">Budget</label>
                <span class="arr"></span>
                <select class="form-control hire-us__content__form__select" id="formBudget">
                  <option>Select your budget range</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div class="form-group col-md-12">
                <label class="hire-us__content__form__label" for="formMessage">Message</label>
                <textarea class="form-control hire-us__content__form__textarea" id="formMessage" rows="3" placeholder="What’s your biggest marketing challenge?"></textarea>
              </div>

              <div class="hire-us__content__form__button col-md-12">
                <button class="btn btn-primary btn-lg btn-block">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HEADER_EV, CHANGE_PAGE } from '../../events/HeaderEvent';

export default {
  name: 'hire-us',
  mounted() {
    this.changeBGHeader();
  },
  methods: {
    changeBGHeader() {
      HEADER_EV.emit(CHANGE_PAGE, 'hire-us');
    },
  },
};
</script>
