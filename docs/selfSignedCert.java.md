# `tls_self_signed_cert`

Refer to the Terraform Registory for docs: [`tls_self_signed_cert`](https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert).

# `selfSignedCert` Submodule <a name="`selfSignedCert` Submodule" id="@cdktf/provider-tls.selfSignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SelfSignedCert <a name="SelfSignedCert" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert tls_self_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.self_signed_cert.SelfSignedCert;

SelfSignedCert.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .allowedUses(java.util.List<java.lang.String>)
    .privateKeyPem(java.lang.String)
    .validityPeriodHours(java.lang.Number)
//  .dnsNames(java.util.List<java.lang.String>)
//  .earlyRenewalHours(java.lang.Number)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .isCaCertificate(java.lang.Boolean)
//  .isCaCertificate(IResolvable)
//  .setAuthorityKeyId(java.lang.Boolean)
//  .setAuthorityKeyId(IResolvable)
//  .setSubjectKeyId(java.lang.Boolean)
//  .setSubjectKeyId(IResolvable)
//  .subject(SelfSignedCertSubject)
//  .uris(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.allowedUses">allowedUses</a></code> | <code>java.util.List<java.lang.String></code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.validityPeriodHours">validityPeriodHours</a></code> | <code>java.lang.Number</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.dnsNames">dnsNames</a></code> | <code>java.util.List<java.lang.String></code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.earlyRenewalHours">earlyRenewalHours</a></code> | <code>java.lang.Number</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.isCaCertificate">isCaCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.setAuthorityKeyId">setAuthorityKeyId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.setSubjectKeyId">setSubjectKeyId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.subject">subject</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.allowedUses"></a>

- *Type:* java.util.List<java.lang.String>

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.privateKeyPem"></a>

- *Type:* java.lang.String

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.validityPeriodHours"></a>

- *Type:* java.lang.Number

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}

---

##### `dnsNames`<sup>Optional</sup> <a name="dnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.dnsNames"></a>

- *Type:* java.util.List<java.lang.String>

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#dns_names SelfSignedCert#dns_names}

---

##### `earlyRenewalHours`<sup>Optional</sup> <a name="earlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.earlyRenewalHours"></a>

- *Type:* java.lang.Number

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.ipAddresses"></a>

- *Type:* java.util.List<java.lang.String>

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}

---

##### `isCaCertificate`<sup>Optional</sup> <a name="isCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.isCaCertificate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}

---

##### `setAuthorityKeyId`<sup>Optional</sup> <a name="setAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.setAuthorityKeyId"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#set_authority_key_id SelfSignedCert#set_authority_key_id}

---

##### `setSubjectKeyId`<sup>Optional</sup> <a name="setSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.setSubjectKeyId"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.subject"></a>

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#subject SelfSignedCert#subject}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.uris"></a>

- *Type:* java.util.List<java.lang.String>

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#uris SelfSignedCert#uris}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetDnsNames">resetDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetEarlyRenewalHours">resetEarlyRenewalHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIsCaCertificate">resetIsCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetAuthorityKeyId">resetSetAuthorityKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetSubjectKeyId">resetSetSubjectKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetUris">resetUris</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putSubject` <a name="putSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject"></a>

```java
public void putSubject(SelfSignedCertSubject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>

---

##### `resetDnsNames` <a name="resetDnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetDnsNames"></a>

```java
public void resetDnsNames()
```

##### `resetEarlyRenewalHours` <a name="resetEarlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetEarlyRenewalHours"></a>

```java
public void resetEarlyRenewalHours()
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIpAddresses"></a>

```java
public void resetIpAddresses()
```

##### `resetIsCaCertificate` <a name="resetIsCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIsCaCertificate"></a>

```java
public void resetIsCaCertificate()
```

##### `resetSetAuthorityKeyId` <a name="resetSetAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetAuthorityKeyId"></a>

```java
public void resetSetAuthorityKeyId()
```

##### `resetSetSubjectKeyId` <a name="resetSetSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetSubjectKeyId"></a>

```java
public void resetSetSubjectKeyId()
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSubject"></a>

```java
public void resetSubject()
```

##### `resetUris` <a name="resetUris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetUris"></a>

```java
public void resetUris()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tls.self_signed_cert.SelfSignedCert;

SelfSignedCert.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tls.self_signed_cert.SelfSignedCert;

SelfSignedCert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tls.self_signed_cert.SelfSignedCert;

SelfSignedCert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tls.self_signed_cert.SelfSignedCert;

SelfSignedCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SelfSignedCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SelfSignedCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SelfSignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SelfSignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.certPem">certPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.readyForRenewal">readyForRenewal</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference">SelfSignedCertSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityEndTime">validityEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityStartTime">validityStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUsesInput">allowedUsesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNamesInput">dnsNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHoursInput">earlyRenewalHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddressesInput">ipAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificateInput">isCaCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPemInput">privateKeyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyIdInput">setAuthorityKeyIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyIdInput">setSubjectKeyIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subjectInput">subjectInput</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.urisInput">urisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHoursInput">validityPeriodHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUses">allowedUses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNames">dnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHours">earlyRenewalHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificate">isCaCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyId">setAuthorityKeyId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyId">setSubjectKeyId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHours">validityPeriodHours</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certPem`<sup>Required</sup> <a name="certPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.certPem"></a>

```java
public java.lang.String getCertPem();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `readyForRenewal`<sup>Required</sup> <a name="readyForRenewal" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.readyForRenewal"></a>

```java
public IResolvable getReadyForRenewal();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subject"></a>

```java
public SelfSignedCertSubjectOutputReference getSubject();
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference">SelfSignedCertSubjectOutputReference</a>

---

##### `validityEndTime`<sup>Required</sup> <a name="validityEndTime" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityEndTime"></a>

```java
public java.lang.String getValidityEndTime();
```

- *Type:* java.lang.String

---

##### `validityStartTime`<sup>Required</sup> <a name="validityStartTime" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityStartTime"></a>

```java
public java.lang.String getValidityStartTime();
```

- *Type:* java.lang.String

---

##### `allowedUsesInput`<sup>Optional</sup> <a name="allowedUsesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUsesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedUsesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsNamesInput`<sup>Optional</sup> <a name="dnsNamesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNamesInput"></a>

```java
public java.util.List<java.lang.String> getDnsNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `earlyRenewalHoursInput`<sup>Optional</sup> <a name="earlyRenewalHoursInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHoursInput"></a>

```java
public java.lang.Number getEarlyRenewalHoursInput();
```

- *Type:* java.lang.Number

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isCaCertificateInput`<sup>Optional</sup> <a name="isCaCertificateInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificateInput"></a>

```java
public java.lang.Object getIsCaCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateKeyPemInput`<sup>Optional</sup> <a name="privateKeyPemInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPemInput"></a>

```java
public java.lang.String getPrivateKeyPemInput();
```

- *Type:* java.lang.String

---

##### `setAuthorityKeyIdInput`<sup>Optional</sup> <a name="setAuthorityKeyIdInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyIdInput"></a>

```java
public java.lang.Object getSetAuthorityKeyIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `setSubjectKeyIdInput`<sup>Optional</sup> <a name="setSubjectKeyIdInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyIdInput"></a>

```java
public java.lang.Object getSetSubjectKeyIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subjectInput"></a>

```java
public SelfSignedCertSubject getSubjectInput();
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.urisInput"></a>

```java
public java.util.List<java.lang.String> getUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validityPeriodHoursInput`<sup>Optional</sup> <a name="validityPeriodHoursInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHoursInput"></a>

```java
public java.lang.Number getValidityPeriodHoursInput();
```

- *Type:* java.lang.Number

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUses"></a>

```java
public java.util.List<java.lang.String> getAllowedUses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNames"></a>

```java
public java.util.List<java.lang.String> getDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `earlyRenewalHours`<sup>Required</sup> <a name="earlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHours"></a>

```java
public java.lang.Number getEarlyRenewalHours();
```

- *Type:* java.lang.Number

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isCaCertificate`<sup>Required</sup> <a name="isCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificate"></a>

```java
public java.lang.Object getIsCaCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

---

##### `setAuthorityKeyId`<sup>Required</sup> <a name="setAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyId"></a>

```java
public java.lang.Object getSetAuthorityKeyId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `setSubjectKeyId`<sup>Required</sup> <a name="setSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyId"></a>

```java
public java.lang.Object getSetSubjectKeyId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHours"></a>

```java
public java.lang.Number getValidityPeriodHours();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SelfSignedCertConfig <a name="SelfSignedCertConfig" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.self_signed_cert.SelfSignedCertConfig;

SelfSignedCertConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .allowedUses(java.util.List<java.lang.String>)
    .privateKeyPem(java.lang.String)
    .validityPeriodHours(java.lang.Number)
//  .dnsNames(java.util.List<java.lang.String>)
//  .earlyRenewalHours(java.lang.Number)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .isCaCertificate(java.lang.Boolean)
//  .isCaCertificate(IResolvable)
//  .setAuthorityKeyId(java.lang.Boolean)
//  .setAuthorityKeyId(IResolvable)
//  .setSubjectKeyId(java.lang.Boolean)
//  .setSubjectKeyId(IResolvable)
//  .subject(SelfSignedCertSubject)
//  .uris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.allowedUses">allowedUses</a></code> | <code>java.util.List<java.lang.String></code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.validityPeriodHours">validityPeriodHours</a></code> | <code>java.lang.Number</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dnsNames">dnsNames</a></code> | <code>java.util.List<java.lang.String></code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.earlyRenewalHours">earlyRenewalHours</a></code> | <code>java.lang.Number</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.isCaCertificate">isCaCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setAuthorityKeyId">setAuthorityKeyId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setSubjectKeyId">setSubjectKeyId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.allowedUses"></a>

```java
public java.util.List<java.lang.String> getAllowedUses();
```

- *Type:* java.util.List<java.lang.String>

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.validityPeriodHours"></a>

```java
public java.lang.Number getValidityPeriodHours();
```

- *Type:* java.lang.Number

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}

---

##### `dnsNames`<sup>Optional</sup> <a name="dnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dnsNames"></a>

```java
public java.util.List<java.lang.String> getDnsNames();
```

- *Type:* java.util.List<java.lang.String>

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#dns_names SelfSignedCert#dns_names}

---

##### `earlyRenewalHours`<sup>Optional</sup> <a name="earlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.earlyRenewalHours"></a>

```java
public java.lang.Number getEarlyRenewalHours();
```

- *Type:* java.lang.Number

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}

---

##### `isCaCertificate`<sup>Optional</sup> <a name="isCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.isCaCertificate"></a>

```java
public java.lang.Object getIsCaCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}

---

##### `setAuthorityKeyId`<sup>Optional</sup> <a name="setAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setAuthorityKeyId"></a>

```java
public java.lang.Object getSetAuthorityKeyId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#set_authority_key_id SelfSignedCert#set_authority_key_id}

---

##### `setSubjectKeyId`<sup>Optional</sup> <a name="setSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setSubjectKeyId"></a>

```java
public java.lang.Object getSetSubjectKeyId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.subject"></a>

```java
public SelfSignedCertSubject getSubject();
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#subject SelfSignedCert#subject}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#uris SelfSignedCert#uris}

---

### SelfSignedCertSubject <a name="SelfSignedCertSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.self_signed_cert.SelfSignedCertSubject;

SelfSignedCertSubject.builder()
//  .commonName(java.lang.String)
//  .country(java.lang.String)
//  .locality(java.lang.String)
//  .organization(java.lang.String)
//  .organizationalUnit(java.lang.String)
//  .postalCode(java.lang.String)
//  .province(java.lang.String)
//  .serialNumber(java.lang.String)
//  .streetAddress(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Distinguished name: `CN`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.country">country</a></code> | <code>java.lang.String</code> | Distinguished name: `C`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.locality">locality</a></code> | <code>java.lang.String</code> | Distinguished name: `L`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organization">organization</a></code> | <code>java.lang.String</code> | Distinguished name: `O`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Distinguished name: `OU`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Distinguished name: `PC`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.province">province</a></code> | <code>java.lang.String</code> | Distinguished name: `ST`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | Distinguished name: `SERIALNUMBER`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.streetAddress">streetAddress</a></code> | <code>java.util.List<java.lang.String></code> | Distinguished name: `STREET`. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Distinguished name: `CN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#common_name SelfSignedCert#common_name}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Distinguished name: `C`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#country SelfSignedCert#country}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

Distinguished name: `L`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#locality SelfSignedCert#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Distinguished name: `O`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#organization SelfSignedCert#organization}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

Distinguished name: `OU`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#organizational_unit SelfSignedCert#organizational_unit}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Distinguished name: `PC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#postal_code SelfSignedCert#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

Distinguished name: `ST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#province SelfSignedCert#province}

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

Distinguished name: `SERIALNUMBER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#serial_number SelfSignedCert#serial_number}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.streetAddress"></a>

```java
public java.util.List<java.lang.String> getStreetAddress();
```

- *Type:* java.util.List<java.lang.String>

Distinguished name: `STREET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#street_address SelfSignedCert#street_address}

---

## Classes <a name="Classes" id="Classes"></a>

### SelfSignedCertSubjectOutputReference <a name="SelfSignedCertSubjectOutputReference" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.self_signed_cert.SelfSignedCertSubjectOutputReference;

new SelfSignedCertSubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganizationalUnit"></a>

```java
public void resetOrganizationalUnit()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetSerialNumber"></a>

```java
public void resetSerialNumber()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.provinceInput">provinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumberInput">serialNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddress">streetAddress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnitInput"></a>

```java
public java.lang.String getOrganizationalUnitInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.provinceInput"></a>

```java
public java.lang.String getProvinceInput();
```

- *Type:* java.lang.String

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumberInput"></a>

```java
public java.lang.String getSerialNumberInput();
```

- *Type:* java.lang.String

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddressInput"></a>

```java
public java.util.List<java.lang.String> getStreetAddressInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddress"></a>

```java
public java.util.List<java.lang.String> getStreetAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.internalValue"></a>

```java
public SelfSignedCertSubject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>

---



