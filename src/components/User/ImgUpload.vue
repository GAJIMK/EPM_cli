<template>
  <div class="widget-container flex-box">
    <p>영수증 사진을 업로드하세요</p>
    <div
      id="dropzone-external"
      class="flex-box"
      :class="[
        isDropZoneActive
          ? 'dx-theme-accent-as-border-color dropzone-active'
          : 'dx-theme-border-color',
      ]"
    >
      <img id="dropzone-image" :src="imageSource" v-if="imageSource" alt="" />
      <div id="dropzone-text" class="flex-box" v-if="textVisible">
        <span>영수증 사진을 Drag & Drop 하거나</span>
        <span>클릭하여 파일을 업로드하세요</span>
      </div>
      <DxProgressBar
        id="upload-progress"
        :min="0"
        :max="100"
        width="30%"
        :show-status="false"
        :visible="progressVisible"
        :value="progressValue"
      />
    </div>
    <b-button @click="remove()">삭제</b-button>
    <DxFileUploader
      class="file-uploader"
      id="file-uploader"
      dialog-trigger="#dropzone-external"
      drop-zone="#dropzone-external"
      :multiple="true"
      :allowed-file-extensions="allowedFileExtensions"
      upload-mode="instantly"
      upload-url="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
      :visible="false"
      @drop-zone-enter="onDropZoneEnter"
      @drop-zone-leave="onDropZoneLeave"
      @uploaded="onUploaded"
      @progress="onProgress"
      @upload-started="onUploadStarted"
    />
  </div>
</template>

<script>
import { DxFileUploader } from 'devextreme-vue/file-uploader';
import { DxProgressBar } from 'devextreme-vue/progress-bar';
export default {
  components: {
    DxFileUploader,
    DxProgressBar,
  },
  data() {
    return {
      isDropZoneActive: false,
      imageSource: '',
      textVisible: true,
      progressVisible: false,
      progressValue: 0,
      allowedFileExtensions: ['.jpg', '.jpeg', '.gif', '.png'],
    };
  },

  methods: {
    remove() {},
    onDropZoneEnter(e) {
      if (e.dropZoneElement.id === 'dropzone-external') {
        this.isDropZoneActive = true;
      }
    },
    onDropZoneLeave(e) {
      if (e.dropZoneElement.id === 'dropzone-external') {
        this.isDropZoneActive = false;
      }
    },
    onUploaded(e) {
      const { file } = e;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.isDropZoneActive = false;
        this.imageSource = fileReader.result;
      };
      fileReader.readAsDataURL(file);
      this.textVisible = false;
      this.progressVisible = false;
      this.progressValue = 0;
    },
    onProgress(e) {
      this.progressValue = (e.bytesLoaded / e.bytesTotal) * 100;
    },
    onUploadStarted() {
      this.imageSource = '';
      this.progressVisible = true;
    },
  },
};
</script>

<style>
#dropzone-external {
  width: 300px;
  height: 300px;
  background-color: rgba(183, 183, 183, 0.1);
  border-width: 2px;
  border-style: dashed;
  padding: 10px;
}

#dropzone-external > * {
  pointer-events: none;
}

#dropzone-external.dropzone-active {
  border-style: solid;
}

.widget-container > span {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
}

#dropzone-image {
  max-width: 100%;
  max-height: 100%;
}

#dropzone-text > span {
  font-weight: 100;
  opacity: 0.5;
}

#upload-progress {
  display: flex;
  margin-top: 10px;
}
.file-uploader {
  opacity: 0;
}

.flex-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
