# `tls_locally_signed_cert`

Refer to the Terraform Registory for docs: [`tls_locally_signed_cert`](https://www.terraform.io/docs/providers/tls/r/locally_signed_cert).

# `locallySignedCert` Submodule <a name="`locallySignedCert` Submodule" id="@cdktf/provider-tls.locallySignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocallySignedCert <a name="LocallySignedCert" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert"></a>

Represents a {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert tls_locally_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import locally_signed_cert

locallySignedCert.LocallySignedCert(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_uses: typing.List[str],
  ca_cert_pem: str,
  ca_private_key_pem: str,
  cert_request_pem: str,
  validity_period_hours: typing.Union[int, float],
  early_renewal_hours: typing.Union[int, float] = None,
  is_ca_certificate: typing.Union[bool, IResolvable] = None,
  set_subject_key_id: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.allowedUses">allowed_uses</a></code> | <code>typing.List[str]</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caCertPem">ca_cert_pem</a></code> | <code>str</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caPrivateKeyPem">ca_private_key_pem</a></code> | <code>str</code> | Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.certRequestPem">cert_request_pem</a></code> | <code>str</code> | Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.validityPeriodHours">validity_period_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.earlyRenewalHours">early_renewal_hours</a></code> | <code>typing.Union[int, float]</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.isCaCertificate">is_ca_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.setSubjectKeyId">set_subject_key_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_uses`<sup>Required</sup> <a name="allowed_uses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.allowedUses"></a>

- *Type:* typing.List[str]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `ca_cert_pem`<sup>Required</sup> <a name="ca_cert_pem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caCertPem"></a>

- *Type:* str

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `ca_private_key_pem`<sup>Required</sup> <a name="ca_private_key_pem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caPrivateKeyPem"></a>

- *Type:* str

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `cert_request_pem`<sup>Required</sup> <a name="cert_request_pem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.certRequestPem"></a>

- *Type:* str

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `validity_period_hours`<sup>Required</sup> <a name="validity_period_hours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.validityPeriodHours"></a>

- *Type:* typing.Union[int, float]

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `early_renewal_hours`<sup>Optional</sup> <a name="early_renewal_hours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.earlyRenewalHours"></a>

- *Type:* typing.Union[int, float]

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `is_ca_certificate`<sup>Optional</sup> <a name="is_ca_certificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.isCaCertificate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `set_subject_key_id`<sup>Optional</sup> <a name="set_subject_key_id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.setSubjectKeyId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours">reset_early_renewal_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate">reset_is_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId">reset_set_subject_key_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_early_renewal_hours` <a name="reset_early_renewal_hours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours"></a>

```python
def reset_early_renewal_hours() -> None
```

##### `reset_is_ca_certificate` <a name="reset_is_ca_certificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate"></a>

```python
def reset_is_ca_certificate() -> None
```

##### `reset_set_subject_key_id` <a name="reset_set_subject_key_id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId"></a>

```python
def reset_set_subject_key_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct"></a>

```python
from cdktf_cdktf_provider_tls import locally_signed_cert

locallySignedCert.LocallySignedCert.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tls import locally_signed_cert

locallySignedCert.LocallySignedCert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tls import locally_signed_cert

locallySignedCert.LocallySignedCert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm">ca_key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certPem">cert_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal">ready_for_renewal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime">validity_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime">validity_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput">allowed_uses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput">ca_cert_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput">ca_private_key_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput">cert_request_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput">early_renewal_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput">is_ca_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput">set_subject_key_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput">validity_period_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses">allowed_uses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem">ca_cert_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem">ca_private_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem">cert_request_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours">early_renewal_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate">is_ca_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId">set_subject_key_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours">validity_period_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ca_key_algorithm`<sup>Required</sup> <a name="ca_key_algorithm" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm"></a>

```python
ca_key_algorithm: str
```

- *Type:* str

---

##### `cert_pem`<sup>Required</sup> <a name="cert_pem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certPem"></a>

```python
cert_pem: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ready_for_renewal`<sup>Required</sup> <a name="ready_for_renewal" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal"></a>

```python
ready_for_renewal: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `validity_end_time`<sup>Required</sup> <a name="validity_end_time" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime"></a>

```python
validity_end_time: str
```

- *Type:* str

---

##### `validity_start_time`<sup>Required</sup> <a name="validity_start_time" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime"></a>

```python
validity_start_time: str
```

- *Type:* str

---

##### `allowed_uses_input`<sup>Optional</sup> <a name="allowed_uses_input" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput"></a>

```python
allowed_uses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ca_cert_pem_input`<sup>Optional</sup> <a name="ca_cert_pem_input" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput"></a>

```python
ca_cert_pem_input: str
```

- *Type:* str

---

##### `ca_private_key_pem_input`<sup>Optional</sup> <a name="ca_private_key_pem_input" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput"></a>

```python
ca_private_key_pem_input: str
```

- *Type:* str

---

##### `cert_request_pem_input`<sup>Optional</sup> <a name="cert_request_pem_input" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput"></a>

```python
cert_request_pem_input: str
```

- *Type:* str

---

##### `early_renewal_hours_input`<sup>Optional</sup> <a name="early_renewal_hours_input" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput"></a>

```python
early_renewal_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_ca_certificate_input`<sup>Optional</sup> <a name="is_ca_certificate_input" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput"></a>

```python
is_ca_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `set_subject_key_id_input`<sup>Optional</sup> <a name="set_subject_key_id_input" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput"></a>

```python
set_subject_key_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validity_period_hours_input`<sup>Optional</sup> <a name="validity_period_hours_input" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput"></a>

```python
validity_period_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_uses`<sup>Required</sup> <a name="allowed_uses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses"></a>

```python
allowed_uses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ca_cert_pem`<sup>Required</sup> <a name="ca_cert_pem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem"></a>

```python
ca_cert_pem: str
```

- *Type:* str

---

##### `ca_private_key_pem`<sup>Required</sup> <a name="ca_private_key_pem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem"></a>

```python
ca_private_key_pem: str
```

- *Type:* str

---

##### `cert_request_pem`<sup>Required</sup> <a name="cert_request_pem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem"></a>

```python
cert_request_pem: str
```

- *Type:* str

---

##### `early_renewal_hours`<sup>Required</sup> <a name="early_renewal_hours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours"></a>

```python
early_renewal_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_ca_certificate`<sup>Required</sup> <a name="is_ca_certificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate"></a>

```python
is_ca_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `set_subject_key_id`<sup>Required</sup> <a name="set_subject_key_id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId"></a>

```python
set_subject_key_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validity_period_hours`<sup>Required</sup> <a name="validity_period_hours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours"></a>

```python
validity_period_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LocallySignedCertConfig <a name="LocallySignedCertConfig" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import locally_signed_cert

locallySignedCert.LocallySignedCertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_uses: typing.List[str],
  ca_cert_pem: str,
  ca_private_key_pem: str,
  cert_request_pem: str,
  validity_period_hours: typing.Union[int, float],
  early_renewal_hours: typing.Union[int, float] = None,
  is_ca_certificate: typing.Union[bool, IResolvable] = None,
  set_subject_key_id: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses">allowed_uses</a></code> | <code>typing.List[str]</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem">ca_cert_pem</a></code> | <code>str</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem">ca_private_key_pem</a></code> | <code>str</code> | Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem">cert_request_pem</a></code> | <code>str</code> | Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours">validity_period_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours">early_renewal_hours</a></code> | <code>typing.Union[int, float]</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate">is_ca_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId">set_subject_key_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_uses`<sup>Required</sup> <a name="allowed_uses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses"></a>

```python
allowed_uses: typing.List[str]
```

- *Type:* typing.List[str]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `ca_cert_pem`<sup>Required</sup> <a name="ca_cert_pem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem"></a>

```python
ca_cert_pem: str
```

- *Type:* str

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `ca_private_key_pem`<sup>Required</sup> <a name="ca_private_key_pem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem"></a>

```python
ca_private_key_pem: str
```

- *Type:* str

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `cert_request_pem`<sup>Required</sup> <a name="cert_request_pem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem"></a>

```python
cert_request_pem: str
```

- *Type:* str

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `validity_period_hours`<sup>Required</sup> <a name="validity_period_hours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours"></a>

```python
validity_period_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `early_renewal_hours`<sup>Optional</sup> <a name="early_renewal_hours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours"></a>

```python
early_renewal_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `is_ca_certificate`<sup>Optional</sup> <a name="is_ca_certificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate"></a>

```python
is_ca_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `set_subject_key_id`<sup>Optional</sup> <a name="set_subject_key_id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId"></a>

```python
set_subject_key_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---



