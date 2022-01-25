import React from "react";

const SecondAnotherPages = () => {
  return (
    <div>
      <div className="SecondHome">
        <h4 className="text-center">PERFORMACE</h4>
        <hr className="hr2" />
        <div className="row Skill">
          <div className="col-lg-6 col-sm-12">
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                HTML
                <span class="badge bg-primary rounded-pill">90%</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                CSS
                <span class="badge bg-primary rounded-pill">80%</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                BOOTSTRAP
                <span class="badge bg-primary rounded-pill">85%</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                JAVASCRIPT
                <span class="badge bg-primary rounded-pill">60%</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                REACT JS
                <span class="badge bg-primary rounded-pill">90%</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                GITHUB
                <span class="badge bg-primary rounded-pill">70%</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div class="list-group">
              <a
                href="/"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small>3 days ago</small>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some small print.</small>
              </a>
              <a href="/" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small class="text-muted">And some muted small print.</small>
              </a>
              <a href="/" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small class="text-muted">And some muted small print.</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondAnotherPages;
