# Software Requirements Specification (SRS)

## Project Title

**Client-Side Local Document Similarity & Plagiarism Indication Web Application**

---

## Version Information

| Item              | Description                         |
| ----------------- | ----------------------------------- |
| Document Version  | 2.0                                 |
| Date              | January 2026                        |
| Author            | LostDocument                        |
| Status            | Revised Draft                       |
| Intended Audience | Developers, Supervisors, Evaluators |

---

## 1. Introduction

### 1.1 Purpose

This document defines the **software requirements** for a **fully client-side, static web application** that analyzes **text similarity** between a user-submitted document and a **local collection of reference articles stored in the browser**.

The SRS serves as:

- A formal agreement between stakeholders
- A development guideline for engineers
- A reference document for evaluation, implementation, and maintenance

---

### 1.2 Scope

The system provides:

- Document submission through a static web interface
- Local text similarity analysis executed entirely in the browser
- Visualization of similarity scores and matched text segments
- Local storage of reference documents using browser storage mechanisms

The system **does not**:

- Upload documents to a server
- Depend on backend services
- Crawl or store external web content
- Declare plagiarism verdicts

---

### 1.3 Definitions, Acronyms, and Abbreviations

| Term           | Definition                                                      |
| -------------- | --------------------------------------------------------------- |
| Plagiarism     | Use of others’ work without proper attribution (human judgment) |
| Similarity     | Degree of textual overlap between documents                     |
| Corpus         | Collection of reference documents stored locally                |
| N-gram         | A contiguous sequence of _n_ words                              |
| Fingerprinting | Hash-based representation of text segments                      |
| Static Web App | A web application without server-side logic                     |
| SRS            | Software Requirements Specification                             |

---

### 1.4 References

- IEEE 830 Software Requirements Specification
- ISO/IEC/IEEE 29148:2018
- Academic literature on document similarity detection
- Web standards for client-side storage and processing

---

## 2. Overall Description

### 2.1 Product Perspective

The application is a **standalone, static web-based system** that runs entirely on the **client side** using modern browser capabilities. All document processing, storage, and similarity analysis occur **locally in the user's browser**.

This design prioritizes:

- Privacy
- Offline capability
- Simplicity of deployment

---

### 2.2 Product Functions (High-Level)

- Accept user-submitted documents
- Manage a local reference corpus
- Normalize and preprocess text
- Generate text fingerprints
- Compare fingerprints locally
- Compute similarity scores
- Display summary and detailed comparison results
- Export analysis reports

---

### 2.3 User Classes and Characteristics

| User Class   | Description                                            |
| ------------ | ------------------------------------------------------ |
| General User | Submits documents, manages local corpus, views results |

> No authentication or multi-user roles are required for the MVP.

---

### 2.4 Operating Environment

- Modern web browser (desktop-first)
- Static hosting environment (e.g., local file system or static hosting service)
- No internet connection required after initial load

---

### 2.5 Design and Implementation Constraints

- The system must operate without server-side processing
- All computation must be feasible within browser performance limits
- Reference corpus storage is limited by browser storage constraints
- Only text-based document formats are supported initially

---

### 2.6 User Documentation

- Inline tooltips explaining similarity interpretation
- On-page explanations of system limitations
- Lightweight help/about section

---

## 3. System Features and Functional Requirements

---

### 3.1 Document Input Module

**Description:**  
Allows users to submit a document for similarity analysis.

**Functional Requirements:**

- FR-1: The system shall allow users to upload a text file via the browser.
- FR-2: The system shall allow users to paste text manually.
- FR-3: The system shall display real-time word count.
- FR-4: The system shall prevent analysis when no input is provided.

---

### 3.2 Local Reference Corpus Module

**Description:**  
Manages reference documents stored locally in the user's browser.

**Functional Requirements:**

- FR-5: The system shall allow users to upload reference documents.
- FR-6: The system shall store reference documents locally.
- FR-7: The system shall display metadata (file name, word count).
- FR-8: The system shall allow users to remove reference documents.

---

### 3.3 Similarity Analysis Module

**Description:**  
Performs similarity computation entirely on the client side.

**Functional Requirements:**

- FR-9: The system shall preprocess input text locally.
- FR-10: The system shall generate n-gram fingerprints.
- FR-11: The system shall compare fingerprints against the local corpus.
- FR-12: The system shall compute similarity scores per reference document.

---

### 3.4 Summary Report Module

**Description:**  
Displays a high-level similarity overview.

**Functional Requirements:**

- FR-13: The system shall display overall similarity percentage.
- FR-14: The system shall classify similarity levels (Low/Medium/High).
- FR-15: The system shall display a disclaimer clarifying result interpretation.

---

### 3.5 Detailed Comparison Module

**Description:**  
Allows users to inspect matched text segments.

**Functional Requirements:**

- FR-16: The system shall highlight matched text segments.
- FR-17: The system shall associate highlights with source documents.
- FR-18: The system shall use consistent visual indicators per source.

---

### 3.6 Report Export Module

**Description:**  
Allows users to save analysis results locally.

**Functional Requirements:**

- FR-19: The system shall allow exporting the analysis report.
- FR-20: The system shall allow resetting the analysis session.

---

## 4. External Interface Requirements

### 4.1 User Interface

- Web-based graphical interface
- Desktop-first responsive design
- Clear separation between input, summary, and detail views

---

### 4.2 Hardware Interfaces

- No specialized hardware required
- Runs on standard consumer devices

---

### 4.3 Software Interfaces

- Browser File API for file access
- Browser storage mechanisms for corpus persistence
- No external APIs required

---

### 4.4 Communication Interfaces

- Internal client-side module communication only
- No network communication required

---

## 5. Non-Functional Requirements

---

### 5.1 Performance Requirements

- The system shall complete analysis within acceptable time for typical document sizes.
- The user interface shall remain responsive during processing.

---

### 5.2 Security and Privacy Requirements

- Documents shall never be transmitted to external servers.
- All data shall remain within the user’s browser environment.

---

### 5.3 Usability Requirements

- Neutral and non-accusatory language
- Clear visual hierarchy
- Tooltips explaining similarity scores

---

### 5.4 Reliability Requirements

- The system shall handle large inputs gracefully.
- Errors shall be communicated clearly to the user.

---

### 5.5 Maintainability Requirements

- Modular client-side architecture
- Configurable similarity thresholds
- Clear separation between UI and analysis logic

---

## 6. Assumptions and Dependencies

### Assumptions

- Users understand that similarity does not equate to plagiarism.
- Users manage their own reference corpus responsibly.

### Dependencies

- Modern browser support
- Sufficient local storage availability

---

## 7. Future Enhancements (Out of Scope)

- Semantic similarity detection
- Web-based plagiarism checking
- Multi-user collaboration
- Cloud-based corpus synchronization

---

## 8. Appendix

### Ethical Disclaimer

This system provides **similarity indications only**.  
Final plagiarism judgments must be made by human evaluators.

---

## Final Note

This application is designed as a **privacy-preserving, client-side document analysis tool**, suitable for educational, research, and personal writing support contexts.
