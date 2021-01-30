import { html, LitElement, property, customElement } from 'lit-element';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

@customElement('audio-toolbar')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    // const imgid = sec.getAttribute('id');
    // this.currentImgId = ind;
  }

  @property()
  noAudio = true;

  uploadAudio(event) {
    const file = event.target.files[0];

    const newEvent = new CustomEvent('audio-uploaded', {
      detail: { file },
      composed: true,
      bubbles: true,
    });

    this.dispatchEvent(newEvent);
  }

  customAudiotools() {
    document.querySelector('.customAudioToolbar').style.display = 'block';
  }

  closeCustomaudiotools() {
    document.querySelector('.customAudioToolbar').style.display = 'none';
  }

  closeimge() {
    document.querySelector('.editAudio').style.display = 'none';
  }

  title(event) {
    //   alert('ttttttttt')

    const titleevent = new CustomEvent('titleChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(titleevent);
  }

  author(event) {
    //   alert('ttttttttt')

    const authorevent = new CustomEvent('authorChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(authorevent);
  }

  podcastTitle(event) {
    //   alert('ttttttttt')

    const podcastTitleevent = new CustomEvent('podcastTitleChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(podcastTitleevent);
  }

  podcastSubitle(event) {
    //   alert('ttttttttt')

    const podcastSubitleevent = new CustomEvent('podcastSubitleChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(podcastSubitleevent);
  }

  summary(event) {
    //   alert('ttttttttt')

    const summaryevent = new CustomEvent('summaryChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(summaryevent);
  }

  episodeNote(event) {
    //   alert('ttttttttt')

    const episodeNoteevent = new CustomEvent('episodeNoteChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(episodeNoteevent);
  }

  episodeType(event) {
    //   alert('ttttttttt')

    const episodeTypeevent = new CustomEvent('episodeTypeChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(episodeTypeevent);
  }

  podcastSeason(event) {
    //   alert('ttttttttt')

    const podcastSeasonevent = new CustomEvent('podcastSeasonChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(podcastSeasonevent);
  }

  podcastEpisode(event) {
    //   alert('ttttttttt')

    const podcastEpisodeevent = new CustomEvent('podcastEpisodeChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(podcastEpisodeevent);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('open-audio-toolbar', (event) => {
      this.customAudiotools();

      event.stopPropagation();
    });

    window.addEventListener('newAudio', (event) => {
      this.noImg = !event.detail.state;
      document.querySelector('.testttt').style.display = 'block';
    });

    window.addEventListener('audio-settings', (event) => {
      document.querySelector('.editAudio').style.display = 'block';
    });
  }

  render() {
    return html`
      <div class="customAudioToolbar toolbar" style="display:none; height:500px; top: 15% ">
        <i class="close fa fa-close" @click=${this.closeCustomaudiotools}></i>

        <div class="tab">
          <ul class="nav nav-tabs customtab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-toggle="tab"
                href="#add"
                role="tab"
                aria-selected="true"
                >Add File</a
              >
            </li>
          
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#Podcast"
                      role="tab"
                      aria-selected="false"
                      >Podcast
                    </a>
                  </li>
               
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="add" role="tabpanel">
              <div class="container">
                <br />

                
                  <div class="secsw1">
                    <input
                      type="file"
                      @change=${this.uploadAudio}
                      class="secImg-main img-file"
                      name="file"
                    />
                    <i class="fa fa-upload" style="font-size: 30px;"></i>
                    <p>Upload Image</p>
                  </div>
               
                <hr />

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="btnText"
                    placeholder="Title"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="btnAuthor"
                    placeholder="Author/Artist"
                  />
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="Podcast" role="tabpanel">
              <div class="pd-20">
                <div class="container">

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="btnText"
                    placeholder="Podcast Title"
                  />
                </div>

               
                <div class="form-group">
                <textarea class="form-control" rols="20" cols="5" resize placeholder="Podcast Subtitle"></textarea>
                </div>

                <div class="form-group">
                <textarea class="form-control" rols="20" cols="5" placeholder="Podcast Summary"></textarea>
                </div>

                <div class="form-group">
                <textarea class="form-control" rols="20" cols="5" placeholder="Episode Note"></textarea>
                </div>

                <div class="form-group">
            <label for="exampleFormControlSelect1">Episode Type</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Season Number</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Episode Number</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
               
                


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div class="editAudio hoverSetBlock" style="display:none">
        &nbsp;
        <i class="close fa fa-close" @click=${this.closeimge}></i>
        <br />
        &nbsp;

        <a
          data-toggle="esec"
          title="Edit Section"
          data-placement="bottom"
          @click=${this.customImgtools}
          ><i class="fa fa-edit" style="font-size:20px; color:black;"></i></a
        >&nbsp;&nbsp;

        <a
          data-toggle="deleteSec"
          title="Delete"
          data-placement="bottom"
          @click=${this.removeImage}
          ><i class="fa fa-trash" style="font-size:20px; color:red;"></i></a
        >&nbsp;
      </div>
    `;
  }
}
