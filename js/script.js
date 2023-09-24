const myName = 'Jonas Schmedtmann';
const h1 = document.querySelector('.heading-primary');

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

// var isAdvancedUpload = (function () {
//   var div = document.createElement('div');
//   return (
//     ('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) &&
//     'FormData' in window &&
//     'FileReader' in window
//   );
// })();

// let draggableFileArea = document.querySelector('.drag-file-area');
// let browseFileText = document.querySelector('.browse-files');
// let uploadIcon = document.querySelector('.upload-icon');
// let dragDropText = document.querySelector('.dynamic-message');
// let fileInput = document.querySelector('.default-file-input');
// let cannotUploadMessage = document.querySelector('.cannot-upload-message');
// let cancelAlertButton = document.querySelector('.cancel-alert-button');
// let uploadedFile = document.querySelector('.file-block');
// let fileName = document.querySelector('.file-name');
// let fileSize = document.querySelector('.file-size');
// let progressBar = document.querySelector('.progress-bar');
// let removeFileButton = document.querySelector('.remove-file-icon');
// let uploadButton = document.querySelector('.upload-button');
// let fileFlag = 0;

// fileInput.addEventListener('click', () => {
//   fileInput.value = '';
//   console.log(fileInput.value);
// });

// fileInput.addEventListener('change', (e) => {
//   console.log(' > ' + fileInput.value);
//   uploadIcon.innerHTML = 'check_circle';
//   dragDropText.innerHTML = 'File Dropped Successfully!';
//   document.querySelector(
//     '.label'
//   ).innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
//   uploadButton.innerHTML = `Upload`;
//   fileName.innerHTML = fileInput.files[0].name;
//   fileSize.innerHTML = (fileInput.files[0].size / 1024).toFixed(1) + ' KB';
//   uploadedFile.style.cssText = 'display: flex;';
//   progressBar.style.width = 0;
//   fileFlag = 0;
// });

// const handleUpload = async () => {
//   let formData = new FormData();
//   formData.append('image', file);
//   const config = {
//     headers: { 'content-type': 'multipart/form-data' },
//   };
//   try {
//     setFile(null);
//     let response = await axios.post(
//       process.env.NEXT_PUBLIC_SERVER,
//       formData,
//       config
//     );
//     console.log(response.data);
//     if (response.data.success) {
//       setResult(response.data);
//       setFile(null);
//       setError(null);
//     } else {
//       setError(response.data.message);
//       setFile(null);
//     }
//   } catch (error) {
//     console.log(error);
//     setError(error.message);
//   }
//   setLoading(false);
// };

// uploadButton.addEventListener('click', () => {
// const input = document.querySelector('input[type="file"]');
// const form = document.querySelector('form');
// let isFileUploaded = fileInput.value;

// console.log(fileInput.value);
// if (isFileUploaded != '') {
//   let formData = new FormData();
//   formData.append('image', input.files[0]);
//   console.log(formData);
//   const config = {
//     headers: {
//       'content-type': 'multipart/form-data',
//       'Access-Control-Allow-Origin': '*',
//     },
//   };

// axios
//   .get('http://127.0.0.1:5000')
//   .then((response) => {
//     // const users = response.data.data;
//     console.log(`GET users`, response);
//   })
//   .catch((error) => console.error(error));
// axios
//   .post('http://127.0.0.1:5000', formData, config)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//     if (fileFlag == 0) {
//       fileFlag = 1;
//       var width = 0;
//       var id = setInterval(frame, 50);
//       function frame() {
//         if (width >= 390) {
//           clearInterval(id);
//           uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
//         } else {
//           width += 5;
//           progressBar.style.width = width + 'px';
//         }
//       }
//     }
//   } else {
//     cannotUploadMessage.style.cssText =
//       'display: flex; animation: fadeIn linear 1.5s;';
//   }
// });

// cancelAlertButton.addEventListener('click', () => {
//   cannotUploadMessage.style.cssText = 'display: none;';
// });

// if (isAdvancedUpload) {
//   [
//     'drag',
//     'dragstart',
//     'dragend',
//     'dragover',
//     'dragenter',
//     'dragleave',
//     'drop',
//   ].forEach((evt) =>
//     draggableFileArea.addEventListener(evt, (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//     })
//   );

//   ['dragover', 'dragenter'].forEach((evt) => {
//     draggableFileArea.addEventListener(evt, (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       uploadIcon.innerHTML = 'file_download';
//       dragDropText.innerHTML = 'Drop your file here!';
//     });
//   });

//   draggableFileArea.addEventListener('drop', (e) => {
//     uploadIcon.innerHTML = 'check_circle';
//     dragDropText.innerHTML = 'File Dropped Successfully!';
//     document.querySelector(
//       '.label'
//     ).innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
//     uploadButton.innerHTML = `Upload`;

//     let files = e.dataTransfer.files;
//     fileInput.files = files;
//     console.log(files[0].name + ' ' + files[0].size);
//     console.log(document.querySelector('.default-file-input').value);
//     fileName.innerHTML = files[0].name;
//     fileSize.innerHTML = (files[0].size / 1024).toFixed(1) + ' KB';
//     uploadedFile.style.cssText = 'display: flex;';
//     progressBar.style.width = 0;
//     fileFlag = 0;
//   });
// }

// removeFileButton.addEventListener('click', () => {
//   uploadedFile.style.cssText = 'display: none;';
//   fileInput.value = '';
//   uploadIcon.innerHTML = 'file_upload';
//   dragDropText.innerHTML = 'Drag & drop any file here';
//   document.querySelector(
//     '.label'
//   ).innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
//   uploadButton.innerHTML = `Upload`;
// });
