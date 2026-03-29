import{i as e,n as t}from"./lit-BZwq2xLD.js";import{t as n}from"./format-DeRVtGzv.js";import{E as r}from"./index-Ij2djnNX.js";import{i,n as a,r as o,t as s}from"./skills-shared-DMlqIU2G.js";function c(e){return e?r(e,window.location.href):null}var l=[{id:`all`,label:`All`},{id:`ready`,label:`Ready`},{id:`needs-setup`,label:`Needs Setup`},{id:`disabled`,label:`Disabled`}];function u(e,t){switch(t){case`all`:return!0;case`ready`:return!e.disabled&&e.eligible;case`needs-setup`:return!e.disabled&&!e.eligible;case`disabled`:return e.disabled}}function d(e){return e.disabled?`muted`:e.eligible?`ok`:`warn`}function f(n){let r=n.report?.skills??[],a={all:r.length,ready:0,"needs-setup":0,disabled:0};for(let e of r)e.disabled?a.disabled++:e.eligible?a.ready++:a[`needs-setup`]++;let o=n.statusFilter===`all`?r:r.filter(e=>u(e,n.statusFilter)),s=n.filter.trim().toLowerCase(),c=s?o.filter(e=>[e.name,e.description,e.source].join(` `).toLowerCase().includes(s)):o,d=i(c),f=n.detailKey?r.find(e=>e.skillKey===n.detailKey)??null:null;return e`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">Installed skills and their status.</div>
        </div>
        <button class="btn" ?disabled=${n.loading||!n.connected} @click=${n.onRefresh}>
          ${n.loading?`Loading…`:`Refresh`}
        </button>
      </div>

      <div class="agent-tabs" style="margin-top: 14px;">
        ${l.map(t=>e`
            <button
              class="agent-tab ${n.statusFilter===t.id?`active`:``}"
              @click=${()=>n.onStatusFilterChange(t.id)}
            >
              ${t.label}<span class="agent-tab-count">${a[t.id]}</span>
            </button>
          `)}
      </div>

      <div class="filters" style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 12px;">
        <a
          class="btn btn--sm"
          href="https://clawhub.com"
          target="_blank"
          rel="noreferrer"
          title="Browse skills on ClawHub"
        >Browse Skills Store</a>
        <label class="field" style="flex: 1; min-width: 180px;">
          <input
            .value=${n.filter}
            @input=${e=>n.onFilterChange(e.target.value)}
            placeholder="Search skills"
            autocomplete="off"
            name="skills-filter"
          />
        </label>
        <div class="muted">${c.length} shown</div>
      </div>

      ${n.error?e`<div class="callout danger" style="margin-top: 12px;">${n.error}</div>`:t}

      ${c.length===0?e`
              <div class="muted" style="margin-top: 16px">
                ${!n.connected&&!n.report?`Not connected to gateway.`:`No skills found.`}
              </div>
            `:e`
            <div class="agent-skills-groups" style="margin-top: 16px;">
              ${d.map(t=>e`
                  <details class="agent-skills-group" open>
                    <summary class="agent-skills-header">
                      <span>${t.label}</span>
                      <span class="muted">${t.skills.length}</span>
                    </summary>
                    <div class="list skills-grid">
                      ${t.skills.map(e=>p(e,n))}
                    </div>
                  </details>
                `)}
            </div>
          `}
    </section>

    ${f?m(f,n):t}
  `}function p(r,i){let a=i.busyKey===r.skillKey;return e`
    <div
      class="list-item list-item-clickable"
      @click=${()=>i.onDetailOpen(r.skillKey)}
    >
      <div class="list-main">
        <div class="list-title" style="display: flex; align-items: center; gap: 8px;">
          <span class="statusDot ${d(r)}"></span>
          ${r.emoji?e`<span>${r.emoji}</span>`:t}
          <span>${r.name}</span>
        </div>
        <div class="list-sub">${n(r.description,140)}</div>
      </div>
      <div class="list-meta" style="display: flex; align-items: center; justify-content: flex-end; gap: 10px;">
        <label
          class="skill-toggle-wrap"
          @click=${e=>e.stopPropagation()}
        >
          <input
            type="checkbox"
            class="skill-toggle"
            .checked=${!r.disabled}
            ?disabled=${a}
            @change=${e=>{e.stopPropagation(),i.onToggle(r.skillKey,r.disabled)}}
          />
        </label>
      </div>
    </div>
  `}function m(n,r){let i=r.busyKey===n.skillKey,l=r.edits[n.skillKey]??``,u=r.messages[n.skillKey]??null,f=n.install.length>0&&n.missing.bins.length>0,p=!!(n.bundled&&n.source!==`openclaw-bundled`),m=s(n),h=a(n);return e`
    <dialog class="md-preview-dialog" open @click=${e=>{e.target.classList.contains(`md-preview-dialog`)&&r.onDetailClose()}}>
      <div class="md-preview-dialog__panel">
        <div class="md-preview-dialog__header">
          <div class="md-preview-dialog__title" style="display: flex; align-items: center; gap: 8px;">
            <span class="statusDot ${d(n)}"></span>
            ${n.emoji?e`<span style="font-size: 18px;">${n.emoji}</span>`:t}
            <span>${n.name}</span>
          </div>
          <button class="btn btn--sm" @click=${r.onDetailClose}>Close</button>
        </div>
        <div class="md-preview-dialog__body" style="display: grid; gap: 16px;">
          <div>
            <div style="font-size: 14px; line-height: 1.5; color: var(--text);">${n.description}</div>
            ${o({skill:n,showBundledBadge:p})}
          </div>

          ${m.length>0?e`
                <div class="callout" style="border-color: var(--warn-subtle); background: var(--warn-subtle); color: var(--warn);">
                  <div style="font-weight: 600; margin-bottom: 4px;">Missing requirements</div>
                  <div>${m.join(`, `)}</div>
                </div>
              `:t}

          ${h.length>0?e`
                <div class="muted" style="font-size: 13px;">
                  Reason: ${h.join(`, `)}
                </div>
              `:t}

          <div style="display: flex; align-items: center; gap: 12px;">
            <label class="skill-toggle-wrap">
              <input
                type="checkbox"
                class="skill-toggle"
                .checked=${!n.disabled}
                ?disabled=${i}
                @change=${()=>r.onToggle(n.skillKey,n.disabled)}
              />
            </label>
            <span style="font-size: 13px; font-weight: 500;">
              ${n.disabled?`Disabled`:`Enabled`}
            </span>
            ${f?e`<button
                  class="btn"
                  ?disabled=${i}
                  @click=${()=>r.onInstall(n.skillKey,n.name,n.install[0].id)}
                >
                  ${i?`Installing…`:n.install[0].label}
                </button>`:t}
          </div>

          ${u?e`<div
                class="callout ${u.kind===`error`?`danger`:`success`}"
              >
                ${u.message}
              </div>`:t}

          ${n.primaryEnv?e`
                <div style="display: grid; gap: 8px;">
                  <div class="field">
                    <span>API key <span class="muted" style="font-weight: normal; font-size: 0.88em;">(${n.primaryEnv})</span></span>
                    <input
                      type="password"
                      .value=${l}
                      @input=${e=>r.onEdit(n.skillKey,e.target.value)}
                    />
                  </div>
                  ${(()=>{let r=c(n.homepage);return r?e`<div class="muted" style="font-size: 13px;">
                        Get your key: <a href="${r}" target="_blank" rel="noopener noreferrer">${n.homepage}</a>
                      </div>`:t})()}
                  <button
                    class="btn primary"
                    ?disabled=${i}
                    @click=${()=>r.onSaveKey(n.skillKey)}
                  >
                    Save key
                  </button>
                </div>
              `:t}

          <div style="border-top: 1px solid var(--border); padding-top: 12px; display: grid; gap: 6px; font-size: 12px; color: var(--muted);">
            <div><span style="font-weight: 600;">Source:</span> ${n.source}</div>
            <div style="font-family: var(--mono); word-break: break-all;">${n.filePath}</div>
            ${(()=>{let r=c(n.homepage);return r?e`<div><a href="${r}" target="_blank" rel="noopener noreferrer">${n.homepage}</a></div>`:t})()}
          </div>
        </div>
      </div>
    </dialog>
  `}export{f as renderSkills};
//# sourceMappingURL=skills-Cqf2_pRr.js.map