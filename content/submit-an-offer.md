---
title: "Submit an offer"
nav_title: "Submit an offer"
lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2021-@@-@@   # Put the date of this translation YYYY-MM-DD (with month in the middle)
github:
  repository: leticiaseixas/wai-list-of-courses
  path: content/index.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /list-of-courses/submit-an-offer   # Add the language shortcode to the end, with no slash at end, for example: /link/to/page/fr
# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /teach-advocate/course-list/@@
  # next: /teach-advocate/course-list/@@
ref: /teach-advocate/course-list/   # Translators, do not change this
changelog: /teach-advocate/course-list/changelog/  # NEW: set up a changelog so it's ready for later
acknowledgements: /teach-advocate/course-list/acknowledgements/  # NEW: delete if don't have a separate acknowledgements page. And delete it in the footer below.
description:  # NEW: add a 150ish-character-description for social media   # translate the description
# image: /content-images/wai-course-list/social.png  # NEW: image for social media (leave commented out if we don't have a specific one for this reource)
# In the footer below:
# Do not translate or change CHANGELOG or ACKNOWLEDGEMENTS.
# Translate the other words below, including "Date:" and "Editor:"
# Translate the Working Group name. Leave the Working Group acronym in English.
# Do not change the dates in the footer below.
footer: 
   <p><strong>Date:</strong> <!-- Updated @@ Month 2021.--> First published Month 20@@. CHANGELOG.</p>
   <p><strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href="https://www.w3.org/groups/wg/eowg/participants">participants of the EOWG</a>. ACKNOWLEDGEMENTS lists contributors and credits.</p>
   <p>Developed by the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>). Developed as part of the <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP project</a>, co-funded by the European Commission.</p>
---

<style> 
{% include css/styles.css %}
</style>

<a href="../">Back to List of Authoring tools</a>
<div>

<form action="…" class="searchform">
<fieldset class="field" id="conformance-status">
  <legend class="label">Conformance status</legend>
  <p class="expl">Describe the current conformance status.</p>

  <div class="radio-field">
    <input type="radio" name="accstmnt_conformance" id="accstmnt_conformance_inapplicable" checked="">
    <label for="accstmnt_conformance_inapplicable">None</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="accstmnt_conformance" id="accstmnt_conformance_full">
    <label for="accstmnt_conformance_full"><span class="status">Fully conformant</span>: <span class="meaning">the content fully meets the standard  without any exceptions</span></label>
  </div>
  <div class="radio-field">
    <input type="radio" name="accstmnt_conformance" id="accstmnt_conformance_partial">
    <label for="accstmnt_conformance_partial"><span class="status">Partially conformant</span>: <span class="meaning">Some parts of the content do not fully meet the standard</span></label>
  </div>
  <div class="radio-field">
    <input type="radio" name="accstmnt_conformance" id="accstmnt_conformance_nonconformant">
    <label for="accstmnt_conformance_nonconformant"><span class="status">Non conformant</span>: <span class="meaning">the content does not meet the standard</span></label>
  </div>
  <div class="radio-field">
    <input type="radio" name="accstmnt_conformance" id="accstmnt_conformance_unknown">
    <label for="accstmnt_conformance_unknown"><span class="status">Not assessed</span>: the content has not been assessed or the evaluation results are not available</label>
  </div>
</fieldset>
    <button class="button button--icon" type="submit">
      <span>Submit</span>
    </button>
</form>
</div>