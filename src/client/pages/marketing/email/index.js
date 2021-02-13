import { html, LitElement, property, customElement } from 'lit-element';
import './audience/dashboard';
import './audience/allcontacts';
import './audience/inbox';
import './audience/segments';
import './audience/tags';
import './campaign/all';
import './campaign/email';
import './campaign/report';
import './automations/ads';
import './automations/journey';
import './automations/postcards';
@customElement('email-marketing')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  audience() {
   
    document.querySelector('.audiences').style.display = 'block';
    document.querySelector('.campaigns').style.display = 'none';
    document.querySelector('.automations').style.display = 'none';
  }
  campaigns() {
    document.querySelector('.audiences').style.display = 'none';
    document.querySelector('.campaigns').style.display = 'block';
    document.querySelector('.automations').style.display = 'none';
  }

  automations() {
    document.querySelector('.audiences').style.display = 'none';
    document.querySelector('.campaigns').style.display = 'none';
    document.querySelector('.automations').style.display = 'block';
  }

  dashboard() {
    document.querySelector('.audiencedash').style.display = 'block';
    document.querySelector('.contacts').style.display = 'none';
    document.querySelector('.inbox').style.display = 'none';
    document.querySelector('.segments').style.display = 'none';
    document.querySelector('.tags').style.display = 'none';
  }
  contacts() {
    document.querySelector('.audiencedash').style.display = 'none';
    document.querySelector('.contacts').style.display = 'block';
    document.querySelector('.inbox').style.display = 'none';
    document.querySelector('.segments').style.display = 'none';
    document.querySelector('.tags').style.display = 'none';
  }
  inbox() {
    document.querySelector('.audiencedash').style.display = 'none';
    document.querySelector('.contacts').style.display = 'none';
    document.querySelector('.inbox').style.display = 'block';
    document.querySelector('.segments').style.display = 'none';
    document.querySelector('.tags').style.display = 'none';
  }
  segments() {
    document.querySelector('.audiencedash').style.display = 'none';
    document.querySelector('.contacts').style.display = 'none';
    document.querySelector('.inbox').style.display = 'none';
    document.querySelector('.segments').style.display = 'block';
    document.querySelector('.tags').style.display = 'none';
  }
  tags() {
    document.querySelector('.audiencedash').style.display = 'none';
    document.querySelector('.contacts').style.display = 'none';
    document.querySelector('.inbox').style.display = 'none';
    document.querySelector('.segments').style.display = 'none';
    document.querySelector('.tags').style.display = 'block';
  }

  campaign(){
    document.querySelector('.campaign').style.display = 'block';
    document.querySelector('.templates').style.display = 'none';
    document.querySelector('.report').style.display = 'none';
  }
  templates(){
    document.querySelector('.campaign').style.display = 'none';
    document.querySelector('.templates').style.display = 'block';
    document.querySelector('.report').style.display = 'none';
  }
  report(){
    document.querySelector('.campaign').style.display = 'none';
    document.querySelector('.templates').style.display = 'none';
    document.querySelector('.report').style.display = 'block';
  }
  journey(){
    document.querySelector('.journey').style.display = 'block';
    document.querySelector('.ads').style.display = 'none';
    document.querySelector('.postcard').style.display = 'none';
  }
  ads(){
    document.querySelector('.journey').style.display = 'none';
    document.querySelector('.ads').style.display = 'block';
    document.querySelector('.postcard').style.display = 'none';
  }
  postcard(){
    document.querySelector('.journey').style.display = 'none';
    document.querySelector('.ads').style.display = 'none';
    document.querySelector('.postcard').style.display = 'block';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div class="email-marketing">
        <div class="container">
          <div class="email-marketing-Head">
            <div class="email-marketing-Head1">
              <a href="" @click=${this.audience}> Audience</a>
            </div>
            <div class="email-marketing-Head2">
              <a href="" @click=${this.campaigns}>campaings</a>
            </div>

            <div class="email-marketing-Head3">
              <a href="" @click=${this.automations}>Automations</a>
            </div>
          </div>
        </div>

        <div class="audiences">
          <div style="display:flex;">
            <div class="email-marketingNav">
              <div class="email-marketingMenu">
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.dashboard}>Dashboard</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.contacts}>Contacts</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.inbox}>Inbox</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.segments}>Segments</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.tags}>Tags</a>
                </div>
              </div>
            </div>

            <div class="email-marketingBody">
              <audience-dashboard class="audiencedash"></audience-dashboard>
              <audience-tags class="tags" style="display:none"></audience-tags>
              <audience-segments
                class="segments"
                style="display:none"
              ></audience-segments>
              <my-inbox class="inbox" style="display:none"></my-inbox>
              <audience-contact
                class="contacts"
                style="display:none"
              ></audience-contact>
            </div>
          </div>
        </div>

        <div class="campaigns" style="display:none">
          <div style="display:flex;">
            <div class="email-marketingNav">
              <div class="email-marketingMenu">
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.campaign}>All Campaigns</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.templates}>Email Templates</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.report}>Report</a>
                </div>
              </div>
            </div>

            <div class="email-marketingBody">
              <all-campaign class="campaign"></all-campaign>
              <email-templates class="templates" style="display:none"></email-templates>
              <report-manager class="report" style="display:none"></report-manager>
            </div>
          </div>
        </div>

        <div class="automations" style="display:none">

        <div style="display:flex;">
            <div class="email-marketingNav">
              <div class="email-marketingMenu">
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.journey}>Customer Journeys</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.ads}>Retargeting Ads</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.postcard}>PostCards</a>
                </div>
              </div>
            </div>

            <div class="email-marketingBody">
              <customer-journey class="journey"></customer-journey>
              <retargeting-ads class="ads" style="display:none"></retargeting-ads>
              <postcard-manager class="postcard" style="display:none"></postcard-manager>
             
            </div>
          </div>

      </div>
      </div>
    `;
  }
}
